const express = require('express');
const router = express.Router();
const path = require('path');

router.use((res, req, next) => {
    console.log('Time: ', Date.now());
    next();
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'pages', 'about.html'));
})

module.exports = router;