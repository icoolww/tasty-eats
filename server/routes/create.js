const router = require("express").Router();


module.exports = db => {

 router.post("/create", (req, res) => {
  const newMapName = req.body.name;

  db.query(
    `INSERT INTO recipes(name)
     VALUES ($1)
     RETURNING *;`,
    [newMapName]
  )

    // .then runs when the above DB insert is successfull, then user is redirected to the recipe they created
    .then((data) => {
      const recipeID = data.rows[0].id;
      return res.redirect(`/recipe/${recipeID}`);
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(500).json({ error: err.message });
    });
});

router.post("/:recipe_id/delete", (req, res) => {

  db.query(`DELETE FROM recipes WHERE ID = 1`)
    
    .then((data) => {
      return res.redirect("/");
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(500).json({ error: err.message });
    });
});



return router;
};
