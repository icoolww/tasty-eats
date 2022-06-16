const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db");
const { Console } = require("console");

const recipeRoutes = require("./routes/recipe")(db);
const mainRoutes = require("./routes/main")(db);
const categoryRoutes = require("./routes/categories");
const favoriteRoutes = require("./routes/favorites");


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


module.exports = function application(ENV) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use('/api/data', (req, res) => res.json({
    message: "Testing Message",
  }));

  app.use('/api/hello', (req, res) => res.json({
    message: "Hello World!",
  }));

  app.use('/api/recipes', recipeRoutes);
  app.use('/api', mainRoutes);
  app.use('/api/categories', categoryRoutes)
  app.use('/api/favorites', favoriteRoutes);
 


  if (ENV === "development" || ENV === "test") {
    console.log(ENV);
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          console.log(create, seed);
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }
  
  
  app.close = function() {
    return db.end();
  };

  return app;
};