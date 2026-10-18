#![cfg(feature = "integration-tests")]

// These tests intentionally live behind a feature because they require PostgreSQL.
// Run with:
//   DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5432/ironbook_test \
//   cargo test --features integration-tests
//
// The preferred setup is to run them against a disposable PostgreSQL database/CI service.

mod common;

use common::{init_db, test_state};
use ironbook_api::{db, errors::AppError, services};
use sqlx::PgPool;

async fn reset(pool: &PgPool) {
    sqlx::query("TRUNCATE TABLE sessions, users, clients RESTART IDENTITY CASCADE")
        .execute(pool)
        .await
        .expect("truncate test tables");
}

#[sqlx::test(migrations = false)]
async fn common_lookup_functions_trim_inputs(pool: PgPool) {
    let mut state = test_state();
    state.db = pool.clone();
    init_db(&pool).await;
    reset(&pool).await;

    sqlx::query("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)")
        .bind("alice")
        .bind("alice@example.com")
        .bind("hash")
        .execute(&pool)
        .await
        .unwrap();

    assert_eq!(
        db::common::get_user_id_by_username(&state, "  alice  ")
            .await
            .unwrap(),
        Some(1)
    );
    assert_eq!(
        db::common::get_user_id_by_email(&state, " alice@example.com ")
            .await
            .unwrap(),
        Some(1)
    );
    assert_eq!(
        db::common::get_username_by_id(&state, &1).await.unwrap(),
        Some("alice".into())
    );
    assert_eq!(
        db::common::get_password_hash_by_user_id(&state, &1)
            .await
            .unwrap(),
        Some("hash".into())
    );
    assert_eq!(
        db::common::get_user_id_by_username(&state, "missing")
            .await
            .unwrap(),
        None
    );
}

#[sqlx::test(migrations = false)]
async fn auth_login_creates_a_new_session_and_returns_its_token(pool: PgPool) {
    let mut state = test_state();
    state.db = pool.clone();
    init_db(&pool).await;
    reset(&pool).await;

    sqlx::query("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)")
        .bind("alice")
        .bind("alice@example.com")
        .bind("hash")
        .execute(&pool)
        .await
        .unwrap();

    let token = db::auth::login(
        &state,
        services::auth::LoginRequest {
            email: "alice@example.com".into(),
            password: "hash".into(),
        },
        &"zyxwvutsrqponmlkjihgfedcba654321".to_string(),
    )
    .await
    .unwrap();

    assert_eq!(token, "zyxwvutsrqponmlkjihgfedcba654321");
}

#[sqlx::test(migrations = false)]
async fn system_first_start_and_api_token_storage_work(pool: PgPool) {
    let mut state = test_state();
    state.db = pool.clone();
    init_db(&pool).await;
    reset(&pool).await;

    assert!(db::system::is_first_start(&state).await.unwrap());

    let data = services::system::ApiTokenRequest {
        name: "client-one".into(),
        owner_email: "owner@example.com".into(),
    };

    assert!(
        db::system::store_api_token(
            &state,
            data,
            &"abcdefghijklmnopqrstuvwxyz123456".to_string(),
            &"abcdefghijklmnopqrstuvwxyz123456".to_string()
        )
        .await
        .unwrap()
    );

    assert!(!db::system::is_first_start(&state).await.unwrap());
}

#[sqlx::test(migrations = false)]
async fn user_service_searches_by_email_and_username(pool: PgPool) {
    let mut state = test_state();
    state.db = pool.clone();
    init_db(&pool).await;
    reset(&pool).await;

    sqlx::query("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)")
        .bind("alice")
        .bind("alice@example.com")
        .bind("hash")
        .execute(&pool)
        .await
        .unwrap();

    let by_email = services::users::search(
        &state,
        services::users::SearchFilter {
            email: Some("alice@example.com".into()),
            username: None,
        },
    )
    .await
    .unwrap();
    assert_eq!(by_email.id, 1);
    assert_eq!(by_email.username, "alice");

    let by_username = services::users::search(
        &state,
        services::users::SearchFilter {
            email: None,
            username: Some("  alice  ".into()),
        },
    )
    .await
    .unwrap();
    assert_eq!(by_username.id, 1);
    assert_eq!(by_username.username, "alice");

    let no_filter = services::users::search(
        &state,
        services::users::SearchFilter {
            email: None,
            username: None,
        },
    )
    .await
    .unwrap_err();
    assert!(matches!(no_filter, AppError::InvalidCredentials));
}

#[sqlx::test(migrations = false)]
async fn user_service_get_by_id_returns_user_or_invalid_credentials(pool: PgPool) {
    let mut state = test_state();
    state.db = pool.clone();
    init_db(&pool).await;
    reset(&pool).await;

    sqlx::query("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)")
        .bind("alice")
        .bind("alice@example.com")
        .bind("hash")
        .execute(&pool)
        .await
        .unwrap();

    let user = services::users::get_user_by_id(&state, 1).await.unwrap();
    assert_eq!(user.id, 1);
    assert_eq!(user.username, "alice");

    let missing = services::users::get_user_by_id(&state, 999)
        .await
        .unwrap_err();
    assert!(matches!(missing, AppError::InvalidCredentials));
}
