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

module.exports = router;