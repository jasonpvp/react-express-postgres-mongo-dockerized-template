// Import the express module
const express = require('express');

// Import the mongodb module
const MongoClient = require('mongodb').MongoClient;

// Create an express app
const app = express();

// Connect to the MongoDB database
MongoClient.connect(process.env.MONGO_URI, (err, client) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // Create a database object
  const db = client.db();

  // Create a collection object
  const collection = db.collection('users');

  // Define a route to insert a new user
  app.post('/users', (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
    };

    collection.insertOne(user, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error inserting user' });
      } else {
        res.json(result.ops[0]);
      }
    });
  });

  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
