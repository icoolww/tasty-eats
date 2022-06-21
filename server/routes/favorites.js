const express = require('express');
const router = express.Router();
const db = require("../db");
//READ ALL FAVORITES
router.get("/", (req, res) => {
  db.query(`SELECT * FROM users_favorites;`)
    .then(async (data) => {
      const favorites_data = data.rows;

      const favorited_recipes = await Promise.all(favorites_data.map(async (favorite_data) => {
        const recipe_data = await db.query(`SELECT * FROM recipes where id=${favorite_data.recipe_id}`)
        return { ...favorite_data, recipe: recipe_data.rows[0] };
      }));
        
      res.status(200).json(favorited_recipes);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  console.log("creatingFav")
  const { user_id, recipe_id } = req.body;
  console.log(user_id, recipe_id);
  db.query(`INSERT INTO users_favorites (user_id, recipe_id) VALUES (${user_id},${recipe_id});`)
  .then((data) => {
    res.status(200).json({message:"success"}) 
    ;
  })
  //For Insert only two vales should be placed being user_id and recipe_id (Dont want to hardcode userID)
  //need to add where statement for specific user
  .catch((err) => {
    res.status(500).json({ error: err });
  });
} )

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM users_favorites WHERE recipe_id=${id};`)
  .then((data) => {
    res.status(200).json({message:"success"}) 
    ;
  })
  //need to add where statement for specific user 
  .catch((err) => {
    res.status(500).json({ error: err });
  });
} )

router.get("/:id", (req, res) => {
  const { id } = req.params;

  console.log('coming to this get favorited recipe');
  db.query(`SELECT * FROM users_favorites WHERE recipe_id=${id};`)
  .then((data) => {
    res.status(200).json({isSaved: data.rows.length !== 0});
  })
  //need to add where statement for specific user 
  .catch((err) => {
    res.status(500).json({ error: err, isSaved: false });
  });
} )

module.exports = router;