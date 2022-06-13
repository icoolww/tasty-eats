const router = require("express").Router();

router.post("/favorites", (req, res) => {

  //IF GUEST: assign the recipe to a favorites array/object to the guests cookie
  // !MISSING!

  db.query(
    `INSERT INTO user_favorites`
  )
    // .then runs when DB insert OR guests cookie update is successfull, user gets redirected to the recipe they were on
    .then((data) => {
      return res.redirect("recipe/1");
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(500).json({ error: err.message });
    });
    return router;
});