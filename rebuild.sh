#!/bin/sh
docker-compose down
docker container rm WEB_APP_NAME-postgres-1
docker container rm WEB_APP_NAME-server-1
docker volume rm WEB_APP_NAME_pgdata
docker volume rm WEB_APP_NAME_mongoData
docker-compose build
docker-compose up -d
