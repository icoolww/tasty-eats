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
      .then((res) => {
        res.send({ message: "recipe created", recipe:data.rows[0]}) 
      //res.redirect("/")
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
      `UPDATE recipes SET category_id = $1, user_id = $2, title = $3, ingredient = $4, directions = $5, image = $6, prep_time = $7, portion_size = $8, difficulty = $9 WHERE id = $10
      RETURNING *;`,
      [category_id, user_id, title, ingredient, directions, image, prep_time, portion_size, difficulty, req.params.recipeID]
    )
      .then((data) => {
        return res.send({ message: "recipe updated", recipe:data.rows[0] });
        //res.redirect("/")
      })
      .catch((err) => {
        console.log("error: ", err);
        res.status(500).json({ error: err.message });
      });
  });

  //DELETE
  router.delete("/:id", (req, res) => {
  const { id } = req.params;
    db.query(`DELETE FROM recipes WHERE ID = $1`, [id])
      
      .then((data) => {
        return res.status(200).json()

      })
      .catch((err) => {
        console.log("error: ", err);
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};