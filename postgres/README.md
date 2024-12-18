# Postgres

## Local development
Access the local Postgres server running in docker
- Follow setep steps in [Main readme](../README.md)
- `docker ps`
- Copy the container ID for WEB_APP_DB_NAME-postgres
- `docker exec -it [container ID] sh`
- `psql -U WEB_APP_DB_NAME`
