use crate::db::{common, system};
use crate::errors::AppError;
use crate::state::AppState;
use argon2::{
    Argon2,
    password_hash::{PasswordHasher, SaltString, rand_core::OsRng},
};
use rand::distr::{Alphanumeric, SampleString};
use serde::{Deserialize, Serialize};
use tracing::{info, warn};

#[derive(Debug, Serialize)]
pub struct GreetResponse {
    pub message: String,
    pub status: String,
}

#[derive(Debug, Serialize)]
pub struct HealthReportResponse {
    pub overall: String,
}

#[derive(Debug, Deserialize)]
pub struct ApiTokenRequest {
    pub name: String,
    pub owner_email: String,
}

#[derive(Debug, Serialize)]
pub struct ApiTokenResponse {
    pub token: String,
}

pub async fn greet(_state: &AppState) -> Result<GreetResponse, AppError> {
    info!("Serving greet health check");

    Ok(GreetResponse {
        message: String::from("Hello, World!"),
        status: String::from("success"),
    })
}

pub async fn health_report(_state: &AppState) -> Result<HealthReportResponse, AppError> {
    info!("Serving system health report check");

    Ok(HealthReportResponse {
        overall: String::from("All OK!"),
    })
}

pub async fn generate_api_token(
    state: &AppState,
    api_token_opt: Option<&str>,
    data: ApiTokenRequest,
) -> Result<ApiTokenResponse, AppError> {
    info!(
        token_name = %data.name,
        owner_email = %data.owner_email,
        "Processing API token generation request"
    );

    async fn generate_api_token_inner(
        state: &AppState,
        data: ApiTokenRequest,
    ) -> Result<String, AppError> {
        if data.name.trim().is_empty() {
            return Err(AppError::InvalidName);
        }
        if data.owner_email.trim().is_empty() {
            return Err(AppError::InvalidOwnerEmail);
        }

        let argon2 = Argon2::default();
        let salt = SaltString::generate(&mut OsRng);
        let key = Alphanumeric.sample_string(&mut rand::rng(), 32);
        let secret = Alphanumeric.sample_string(&mut rand::rng(), 32);
        let hashed_secret = argon2
            .hash_password(secret.as_bytes(), &salt)
            .map_err(|e| anyhow::anyhow!("Token hashing failed: {}", e))?
            .to_string();
        let token = format!("ibk_{}_{}", key, &secret);
        system::store_api_token(state, data, &key, &hashed_secret).await?;

        info!("Successfully generated and stored new API token");
        Ok(token)
    }

    if system::is_first_start(state).await? {
        info!("Initial setup detected (first start): bypassing API token verification");
        let token = generate_api_token_inner(state, data).await?;
        Ok(ApiTokenResponse { token })
    } else {
        let api_token = api_token_opt.unwrap_or_default();
        if !common::verify_api_token(state, api_token).await? {
            warn!("Unauthorized API token generation attempt");
            return Err(AppError::InvalidApiToken);
        }
        let token = generate_api_token_inner(state, data).await?;
        Ok(ApiTokenResponse { token })
    }
}
