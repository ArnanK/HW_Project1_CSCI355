const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

/* This code snippet is defining a route handler for a GET request to the root URL ('/'). When a GET
request is made to the root URL, the handler function is executed. */
//Dynamically rendered from the views
router.get('/', (req, res, next) => {
    reqQuery = req.query.query
    res.render("search", {reqQuery:reqQuery})
    //res.sendFile(path.join(__dirname, '../public', 'pages', 'search.html'));
})


module.exports = router;