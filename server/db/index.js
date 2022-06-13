const pg = require("pg");
const dbParams = require('../lib/db');

const client = new pg.Client({
  connectionString: dbParams.connectionString || "",
  ssl: dbParams.connectionString ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
