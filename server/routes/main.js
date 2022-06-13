const router = require("express").Router();

module.exports = db => {

  router.get("/", (req, res) => {
    //query the recipe table from the db in order to populate the data needed for the recipe list 
    db.query(`SELECT * FROM recipe;`)
      .then((data) => {
        const recipe = data.rows;
        res.json({ recipe });
        
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    });


  return router;
};