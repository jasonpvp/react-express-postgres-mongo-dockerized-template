#!/bin/sh
docker-compose down
docker container rm planitx-postgres-1
docker volume rm planitx_pgdata
docker-compose build
docker-compose up
