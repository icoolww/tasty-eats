const express = require('express');
const router = express.Router();
const db = require("../db");


//READ ALL FAVORITES

router.get("/", (req, res) => {
  db.query(`SELECT * FROM users_favorites;`)
    .then((data) => {
      const favorites_data = data.rows;

      res.json(favorites_data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  console.log("creatingFav")
  db.query(`INSERT INTO users_favorites (user_id, recipe_id) VALUES (2,1) RETURNING *`)
  .then((data) => {
    console.log(data.rows)
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
  db.query(`DELETE FROM users_favorites WHERE recipe_id=1;`)
  .then((data) => {
    res.status(200).json({message:"success"}) 
    ;
  })
  //need to add where statement for specific user 
  .catch((err) => {
    res.status(500).json({ error: err });
  });
} )

module.exports = router;