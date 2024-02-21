const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

/* This code snippet is setting up a route using the HTTP GET method for the root URL ("/"). When a GET
request is made to the root URL, the server will respond by sending the file located at the
specified path, which is constructed using `path.join(__dirname, '../public', 'pages',
'index.html')`. This path resolves to the index.html file located in the public/pages directory
relative to the current file's directory. */
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'pages', 'index.html'));
})


module.exports = router;