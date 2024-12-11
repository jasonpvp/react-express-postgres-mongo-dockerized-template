// const { knex } = require("knex");

const config = {
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  },
}

module.exports = config
