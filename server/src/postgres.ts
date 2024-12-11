const pg = require('pg')

export default async function testPsql(): Promise<any> {
  const { Pool, Client } = pg
  // pools will use environment variables
  // for connection information
  const pool = new Pool()

  const res = await pool.query(('select * from users;'))
  // you can also use async/await
  //const res = await pool.query('SELECT NOW()')
  await pool.end()
  return res.rows


  // // clients will also use environment variables
  // // for connection information
  // const client = new Client()
  // await client.connect()

  // const res = await client.query('SELECT NOW()')
  // await client.end()
}

// const pg = require('knex')({
//   client: 'pg',
//   connection: {
//     // connectionString: ,
//     host: process.env.PGHOST,
//     port: process.env.PGPORT,
//     user: process.env.PGUSER,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     ssl: false,
//   },
// });
