// EXPRESS
const express = require('express');
const app = express();
const port = 6060;

// MODULES
const path = require('path');

// MIDDLEWARE FOR STATIC FOLDER
app.use(express.static(path.join(__dirname, '/frontEnd/dist/index.html')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/frontEnd/dist/index.html`, (err) => {
        console.log(err);
    });
})

// START SERVER
app.listen(port, () => {
    console.log(`Application is listening on ${port}`);
});