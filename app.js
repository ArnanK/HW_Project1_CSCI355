/* The code snippet `const express = require('express'); const app = express(); const port = 3000;
const path = require('path');` is setting up the necessary dependencies and variables for creating a
Node.js server using the Express framework. */
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :date[clf]'))

initRoutesFromFolder('routes')

//Include this to use public static features such as CSS, JS, HTML | Allows client side files to be served at the server
app.use(express.static(path.join(__dirname, 'public')));

/* The code `app.listen(port, () => {
    console.log(`Server is listening on port `);
})` is starting the Express application server to listen on a specific port. When a client makes a
request to that port, the server will respond accordingly. The `console.log` statement inside the
callback function will print a message to the console indicating that the server is listening on the
specified port. */
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

function initRoutesFromFolder(folder) {
    const directory = path.join(__dirname, folder);

    fs.readdir(directory, (err, files) => {
        if (err) {
            console.log('Error retrieving directory information', err);
            return
        } else {
            files.forEach(file => {
                if(!file.endsWith('.js')) return
                const routeName = file.replace('.js', '');
                //Aquires Modules from routes directory
                const route = require(path.join(directory, file));
                /* Setting up routes for different paths in the Express application. */
                if (routeName === 'index') app.use('/', route);
                else app.use(`/${routeName}`, route);
            })
        }
    })
    console.log('Routes initialized successfully...');
}
