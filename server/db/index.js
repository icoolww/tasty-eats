const pg = require("pg");
const dbParams = require('../lib/db');

const client = new pg.Client({
  connectionString: dbParams.connectionString || "",
  ssl: dbParams.connectionString ?  { rejectUnauthorized: false } : false,
  host:dbParams.host,   
  port: dbParams.port,   
  user: dbParams.user,   
  password: dbParams.password,
  database: dbParams.database
  // connectionString: process.env.DATABASE_URL || "",
  // ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
