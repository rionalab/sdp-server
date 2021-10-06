const express = require('express');
const app = express();
const contactRoutes = require('./api/routes/contact');
const cors = require("cors");

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/contact', contactRoutes);

module.exports = app;