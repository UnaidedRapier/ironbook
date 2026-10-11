# Iron Book API

Backend API for Project Iron Book, written in Rust with Axum.

## Layout

- `src/` — application source (binary: `ironbook_api`)
- `http/` — sample `.http` request files for manual API testing (the actual HTTP handlers live in `src/views/`)
- `migrations/` — SQLx database migrations (PostgreSQL)
- `tests/` — integration tests
- `.sqlx/` — offline query metadata for SQLx
- `Cargo.toml` / `Cargo.lock` — Rust dependencies

## Development

Complete the root setup first (`scripts/ironbook.sh setup`).
All tasks can be run from the repository root:

| Task | Description |
| --- | --- |
| `mise run //apps/api/dev` | Run the API dev server with auto-reload (`cargo watch`) |
| `mise run //apps/api/test` | Run unit tests (`cargo test`) |
| `mise run //apps/api/test-full` | Run all tests, including DB integration tests |
| `mise run //apps/api/db:up` / `mise run //apps/api/db:down` | Start/stop the `ironbook_db` Postgres service |
| `mise run //apps/api/db:migrate` | Apply pending migrations |
| `mise run //apps/api/db:reset` | Reset the database and re-apply migrations |
