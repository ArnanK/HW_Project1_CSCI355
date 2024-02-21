/* The code snippet `const express = require('express'); const app = express(); const port = 3000;
const path = require('path');` is setting up the necessary dependencies and variables for creating a
Node.js server using the Express framework. */
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');

//Aquires Modules from routes directory
const index = require(path.join(__dirname, 'routes', 'index'));
const contact = require(path.join(__dirname, 'routes', 'contact'));
const about = require(path.join(__dirname, 'routes', 'about'));
const search = require(path.join(__dirname, 'routes', 'search'));
const favorites = require(path.join(__dirname, 'routes', 'favorites'));


//Include this to use public static features such as CSS, JS, HTML | Allows client side files to be served at the server
app.use(express.static(path.join(__dirname, 'public')));


/* The code snippet `app.use('/', index); app.use('/contact', contact); app.use('/about', about);
app.use('/search', search);` is setting up routes for different paths in the Express application. */
app.use('/', index);
app.use('/contact', contact);
app.use('/about', about);
app.use('/search', search);
app.use('/favorites', favorites)


/* The code `app.listen(port, () => {
    console.log(`Server is listening on port `);
})` is starting the Express application server to listen on a specific port. When a client makes a
request to that port, the server will respond accordingly. The `console.log` statement inside the
callback function will print a message to the console indicating that the server is listening on the
specified port. */
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
