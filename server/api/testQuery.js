//#!/bin/sh
//#mongo admin --username $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.getSiblingDB('$MONGO_INITDB_DATABASE').db.users.find()"

const { MongoClient } = require('mongodb');

async function main(){
    const client = new MongoClient(process.env.MONGO_URI);

    try {
        await client.connect();
        await  listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

//var MongoClient = require('mongodb').MongoClient;
//console.log('starting...')
//
//console.log('##### Connecting to mongo: ' + process.env.MONGO_URI)
//MongoClient.connect(process.env.MONGO_URI, (err, client) => {
//  if (err) {
//    console.log('##### error connecting to mongo')
//    console.error(err);
//    process.exit(1);
//  }
//
//  console.log('##### connected to mongo')
//  // Create a database object
//  const db = client.db();
//
//  // Create a collection object
//  const collection = db.collection('users');
//
//  collection.find().toArray((err, users) => {
//    if (err) {
//      console.error(err);
//      res.status(500).send({ message: 'Error retrieving users' });
//    } else {
//      res.json(users);
//    }
//  });
//});
