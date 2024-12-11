const { knex } = require("knex");
const { updateTypes } = require("knex-types");

const db = knex(require("./knexfile.ts"));

updateTypes(db, { output: "./types.ts" }).catch((err) => {
  console.log('!!!!!')
  console.error(err);
  process.exit(1);
});