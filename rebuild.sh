#!/bin/sh
p=`basename "$PWD"`
docker-compose down
docker container rm WEB_APP_NAME-postgres
docker container rm WEB_APP_NAME-server
docker volume rm WEB_APP_NAME_pgdata
docker volume rm WEB_APP_NAME_mongoData
docker-compose build && docker-compose up -d
