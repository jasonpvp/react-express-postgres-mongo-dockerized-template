print('Start DB init #################################################################');

db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

// Create a new collection and insert documents
db.users.insert([
  { first_name: 'test', last_name: 'user', email: 'test-user@email.com' }
]);

// Create a user with read and write privileges for the database
db.createUser({
  user: process.env.MONGO_ADMIN_USERNAME,
  pwd: process.env.MONGO_ADMIN_PASSWORD,
  roles: [
    { role: 'readWrite', db: process.env.MONGO_INITDB_DATABASE }
  ]
});
print('DB init completed #################################################################');
