const res = require("express/lib/response");
const { Pool } = require("pg");
const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "final",
});




module.exports = {}