const express = require('express');
const router = express.Router();
const path = require('path');
const searchRecipes = require(path.join(__dirname, '../utils', 'searchRecipes.js'));

/* Route handler for a GET request to the root URL ('/'). When a GET
request is made to the root URL, the handler function is executed. */
//Dynamically rendered from the views/search.ejs
router.get('/', async (req, res) => {
    reqQuery = req.query.query
    const result = await searchRecipes(reqQuery)
    res.render("search", {recipes:result})
})


module.exports = router;