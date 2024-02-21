const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

initRoutesFromFolder('routes');

app.use(express.static('public'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :date[clf]'));

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
                const route = require(path.join(directory, file));
                app.use(`/${routeName}`, route);
            })
        }
    })    
}

