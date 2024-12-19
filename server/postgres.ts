const db = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    ssl: false,
  },
});

export default async function testPsql(): Promise<any> {
  try {
    const x = await db.table('users').select('*')
    return ({ x })
  } catch (err) {
    return ({ err })
  }
}

