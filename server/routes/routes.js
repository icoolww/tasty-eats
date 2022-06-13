const express = require('express');
const router = express.Router();


// module.exports = (db) => {

// === GET === //

// handling main homepage

// router.get("/", (req, res) => {
//   //query the recipe table from the db in order to populate the data needed for the recipe list 
//   db.query(`SELECT * FROM recipe;`)
//     .then((data) => {
//       const recipe = data.rows;
//       res.json({ recipe });
      
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });

// handling recipe page
// router.get("/:recipeID", (req, res) => {

//   const recipeID = req.params.recipe_id;
//   db.query(`SELECT * FROM recipes WHERE id = ${recipeID};`)

//     .then((data) => {
//       const recipeData = data.rows;

//       res.render("recipe", { dom: recipeData });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });


// === POST === //

  //POST: /recipe /create
  // -user clicks the create a new recipe button and a form will pop up asking for a recipe name and when the user submits the form
  // it will create a new recipe_id for the database

  // router.post("/create", (req, res) => {
  //   const newMapName = req.body.name;

  //   db.query(
  //     `INSERT INTO recipe(name)
  //      VALUES ($1)
  //      RETURNING *;`,
  //     [newMapName]
  //   )

  //     // .then runs when the above DB insert is successfull, then user is redirected to the recipe they created
  //     .then((data) => {
  //       const recipeID = data.rows[0].id;
  //       return res.redirect(`/recipe/${recipeID}`);
  //     })
  //     .catch((err) => {
  //       console.log("error: ", err);
  //       res.status(500).json({ error: err.message });
  //     });
  // });


  

  //POST: /recipe /favorites - If a guest or user favorites a specific recipe that recipe gets saved to them.

  // router.post("/favorites", (req, res) => {

  //   //IF GUEST: assign the recipe to a favorites array/object to the guests cookie
  //   // !MISSING!

  //   db.query(
  //     `INSERT INTO favorite_recipe`
  //   )
  //     // .then runs when DB insert OR guests cookie update is successfull, user gets redirected to the recipe they were on
  //     .then((data) => {
  //       return res.redirect("recipe/1");
  //     })
  //     .catch((err) => {
  //       console.log("error: ", err);
  //       res.status(500).json({ error: err.message });
  //     });
  // });

// POST DELETE /recipes /:recipe_id / delete 

// router.post("/:recipe_id/delete", (req, res) => {

//     db.query(`DELETE FROM recipes WHERE ID = 1`)
      
//       .then((data) => {
//         return res.redirect("/");
//       })
//       .catch((err) => {
//         console.log("error: ", err);
//         res.status(500).json({ error: err.message });
//       });
//   });

//   return router;
// });
}
// module.exports = router 