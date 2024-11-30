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

  // Define a route to update an existing user
  app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = {
      name: req.body.name,
      email: req.body.email,
    };

    collection.updateOne({ _id: id }, { $set: user }, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error updating user' });
      } else {
        res.json(result.modifiedCount);
      }
    });
  });

  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
