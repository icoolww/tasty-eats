const router = require("express").Router();


module.exports = db => {
  //CRUD 
  
  
  //CREATE
  router.post("/", (req, res) => {
    const { image, 
      title, 
      prep_time, 
      portion_size, 
      directions, 
      ingredient, 
      user_id, 
      category_id, 
      difficulty } = req.body;
  
    db.query(
      `INSERT INTO recipes (category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
      [category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty]
    )
  
      // .then runs when the above DB insert is successfull, then user is redirected to the recipe they created
      .then((data) => {
        res.send({ message: "recipe created", recipe:data.rows[0] });
      })
      .catch((err) => {
        console.log("error: ", err);
        res.status(500).json({ error: err.message });
      });
  });
  
//READ ALL
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM recipes;`)
      .then((data) => {
        const recipeData = data.rows;

        res.json(recipeData);
        // res.render("recipe", { dom: recipeData });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  
  
  //READ ONE RECIPE
  router.get("/:recipeID", (req, res) => {
    const recipeID = req.params.recipeID;
    db.query(`SELECT * FROM recipes WHERE id = ${recipeID};`)

      .then((data) => {
        const recipeData = data.rows;

        res.json(recipeData);
        // res.render("recipe", { dom: recipeData });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  //UPDATE 
  router.put("/:recipeID", (req, res) => {
    const { recipeID } = req.params;
    const newRecipeName = req.body.name;
  
    db.query(
      `UPDATE recipes SET name = $1 WHERE id = $2 RETURNING *;`,
      [newRecipeName, recipeID]
    )
  
      // .then runs when the above DB insert is successfull, then user is redirected to the recipe they created
      .then((data) => {
        return res.redirect(`/recipe/${recipeID}`);
      })
      .catch((err) => {
        console.log("error: ", err);
        res.status(500).json({ error: err.message });
      });
  });

  //DELETE
  router.delete("/:recipe_id/delete", (req, res) => {
  
    db.query(`DELETE FROM recipes WHERE ID = $1`)
      
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