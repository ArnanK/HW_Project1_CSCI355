const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const index = require(path.join(__dirname, 'routes', 'index'));
const contact = require(path.join(__dirname, 'routes', 'contact'));
const about = require(path.join(__dirname, 'routes', 'about'));
const recipes = require(path.join(__dirname, 'routes', 'recipes'));

app.use(express.static('public'));

app.use('/index', index);
app.use('/contact', contact);
app.use('/about', about);
app.use('/recipes', recipes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
