const express = require('express');
const router = express.Router();
const path = require('path');

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'pages', 'favorites.html'));
})


module.exports = router;