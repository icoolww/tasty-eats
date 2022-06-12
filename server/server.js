require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const fs = require("fs");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const createUserRouter = require("./routes/index");
const { port } = require("pg/lib/defaults");
const indexRoutes = require("./routes/index"); // IMPORTING ROUTES
const userRouter = createUserRouter(db);
 
function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/', userRouter);


//THIS IS THE ENTRY POINT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
