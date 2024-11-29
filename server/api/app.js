console.log('##### Starting service...')
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const client = new MongoClient(process.env.MONGO_URI);


try {
  console.log('##### Connecting to mongo: ' + process.env.MONGO_URI)

  client.connect().then(() => {
    console.log('##### Mongo connected')
    const db = client.db(process.env.MONGO_INITDB_DATABASE);
    console.log('##### Connected to db: ' + process.env.MONGO_INITDB_DATABASE)

    app.get('/users', async (req, res) => {
      try {
        const users = await db.collection('users').find().map(u => u.name).toArray()
        res.json(users);
      } catch (err) {
        res.status(500).send({ message: 'Error retrieving users: ' + err.message });
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


