// EXPRESS
const express = require('express');
const app = express();
const port = 7070;

// MODULES
const path = require('path');

// MIDDLEWARE FOR STATIC FOLDER
app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/frontend/dist/index.html`, (err) => {
        console.log(err);
    });
})

// START SERVER
app.listen(port, () => {
    console.log(`Application is listening on ${port}`);
});