# React/Grommet, Express, Postgres/Mongo web app template

Template for a web app with dockerized setup.
- React 18
  - [Grommet](https://v2.grommet.io/)
- Express 4
- Postgres 17
- Mongo 6

TODO: Setup production build/deploy options

Why two databases? Just trying things out. Feel free to remove whichever you don't want.


## Local development
- Install [Docker desktop](https://docs.docker.com/desktop/setup/install/windows-install/)
- Reset the template vars
  - Scripted in Linux: install `grep`, `xargs`, and `sed`. Run `./rename.sh`
  - Manually: Search for any variables starting with `WEB_APP` and update
- `docker-compose up -d`
- [View web app](http://localhost:8080)
- [Query Postgres via the web server](http://localhost:3000/psql)
- [Query Mongo via the web server](http://localhost:3000/users)


## Production
TODO: Setup production build/dev options
- Partial example: `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up`
