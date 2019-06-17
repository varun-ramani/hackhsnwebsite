const express = require('express');
const app = express();
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'))
});

app.use('/static', express.static('static'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Running server on port 5000");
})