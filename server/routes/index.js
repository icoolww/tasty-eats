const express = require('express');
const router = express.Router();

// === GET === //

// handling main homepage
router.get("/", (req, res) => {

  
});

// handling create new recipe page
router.get("/create", (req, res) => {

  
});


// handling recipe page
router.get("/recipe/:recipeID", (req, res) => {

  
});



// === POST === //

// handling create new recipe page
router.post("/create", (req, res) => {

  
});


router.listen(5000, () =>{console.log("Server is listening on port 5000")})