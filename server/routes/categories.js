const express = require('express');
const router = express.Router();
const db = require("../db");


//READ ALL CATEGORIES

router.get("/", (req, res) => {
  db.query(`SELECT * FROM categories;`)
    .then((data) => {
      const category_data = data.rows;

      res.json(category_data);
      // res.render("recipe", { dom: recipeData });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;