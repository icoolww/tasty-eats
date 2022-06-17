const router = require("express").Router();

module.exports = db => {

  router.get("/", (req, res) => {
    //query the recipe table from the db in order to populate the data needed for the recipe list 
    // console.log(db)
    db.query('SELECT * FROM recipes;')
      .then((data) => {
        // console.log("data", data)
        const recipe = data.rows;
        return res.json(recipe);

        
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
    });


  return router;
};