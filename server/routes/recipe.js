
const router = require("express").Router();


module.exports = db => {
router.get("/:recipeID", (req, res) => {

  const recipeID = req.params.recipe_id;
  db.query(`SELECT * FROM recipes WHERE id = ${recipeID};`)

    .then((data) => {
      const recipeData = data.rows;

      res.render("recipe", { dom: recipeData });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

return router;
};