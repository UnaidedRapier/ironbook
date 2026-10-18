use crate::{errors::AppError, state::AppState};
use argon2::{Argon2, PasswordHash, PasswordVerifier};
use tracing::warn;

pub async fn verify_api_token(state: &AppState, api_token: &str) -> Result<bool, AppError> {
    let api_vec: Vec<&str> = api_token.split('_').collect();
    let api_key = api_vec.get(1).unwrap_or(&"");
    let client_opt = sqlx::query!(
        r#"
        SELECT api_key, api_secret
        FROM clients
        WHERE api_key = $1
        "#,
        api_key
    )
    .fetch_optional(&state.db)
    .await?;

    let client = match client_opt {
        Some(c) => c,
        None => return Err(AppError::InvalidApiToken),
    };

    let secret = client.api_secret;
    let argon2 = Argon2::default();
    let parsed_hash = PasswordHash::new(&secret)
        .map_err(|e| anyhow::anyhow!("Invalid stored secret hash format: {}", e))?;

    println!("{}", api_vec.get(2).unwrap_or(&""));
    let secret_matched = argon2
        .verify_password(api_vec.get(2).unwrap_or(&"").as_bytes(), &parsed_hash)
        .is_ok();

    if !secret_matched {
        warn!("Failed API Token verification attempt (invalid key)");
        return Err(AppError::InvalidApiToken);
    }
    Ok(true)
}

pub async fn get_user_id_by_username(
    state: &AppState,
    username: &str,
) -> Result<Option<i64>, AppError> {
    let user_id = sqlx::query_scalar!(
        r#"
        SELECT id
        FROM users
        WHERE username = $1
        "#,
        username.trim()
    )
    .fetch_optional(&state.db)
    .await?;

    Ok(user_id)
}

pub async fn get_username_by_id(state: &AppState, id: &i64) -> Result<Option<String>, AppError> {
    if *id < 0 {
        return Err(AppError::InvalidCredentials);
    }
    let username = sqlx::query_scalar!(
        r#"
        SELECT username
        FROM users
        WHERE id = $1
        "#,
        id
    )
    .fetch_optional(&state.db)
    .await?;

    Ok(username)
}

pub async fn get_user_id_by_email(state: &AppState, email: &str) -> Result<Option<i64>, AppError> {
    let user_id = sqlx::query_scalar!(
        r#"
        SELECT id
        FROM users
        WHERE email = $1
        "#,
        email.trim()
    )
    .fetch_optional(&state.db)
    .await?;

    Ok(user_id)
}

pub async fn get_password_hash_by_user_id(
    state: &AppState,
    user_id: &i64,
) -> Result<Option<String>, AppError> {
    if *user_id < 0 {
        return Err(AppError::InvalidCredentials);
    }
    let password_hash = sqlx::query_scalar!(
        r#"
        SELECT password_hash
        FROM users
        WHERE id = $1
        "#,
        user_id
    )
    .fetch_optional(&state.db)
    .await?;

    Ok(password_hash)
}
