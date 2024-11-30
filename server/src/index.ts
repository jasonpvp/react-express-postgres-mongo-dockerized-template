console.log('##### Starting service...')
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const client = new MongoClient(process.env.MONGO_URI);

import testPsql from './postgres'

try {
  console.log('##### Connecting to mongo: ' + process.env.MONGO_URI)

  client.connect().then(() => {
    console.log('##### Mongo connected')
    const db = client.db(process.env.MONGO_INITDB_DATABASE);
    console.log('##### Connected to db: ' + process.env.MONGO_INITDB_DATABASE)

    app.get('/psql', async (req: any, res: any) => {
      const data = await testPsql()
      res.json({ data, x: 11 })
    })

    app.get('/users', async (req: any, res: any) => {
      try {
        const users = await db.collection('users').find().map((u: User) => `${u.first_name} ${u.last_name}`).toArray()
        res.json(users);
      } catch (err: unknown) {
        res.status(500).send({ message: 'Error retrieving users: ' + ((err instanceof Error) ? err.message : '') });
      }
    });

    // Start the server
    const port = 3000;
    app.listen(port, () => {
      console.log(`##### Server listening on port ${port}`);
    });
  })
} catch (err) {
  console.log('##### Error starting service')
  console.error(err);
  process.exit(1);
}

type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  created_at: number
  updated_at: number
}

type Item = {
  id: number
  title: string
  description: string
  created_at: number
  update_at: number
}
