# Infra

Infrastructure-as-code for Project Iron Book.

## Layout

- `docker/compose/compose.yaml` — development compose file. Starts supporting
  services such as the `ironbook_db` Postgres database used during API
  development (see the `db:up` task in `apps/api/mise.toml`).
- `docker/compose/prod.yaml` — production compose file.

## Usage

```sh
cd infra/docker/compose
docker compose -f compose.yaml up -d    # start dev services
docker compose -f compose.yaml down     # stop them
```

Per-app `mise.toml` files wrap these commands (e.g. `mise run db:up` in
`apps/api`), so prefer the app-level tasks when developing.
