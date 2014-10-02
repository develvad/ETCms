var express = require('express');
var routes = require("./router/router");
var bodyParser = require('body-parser');
var utils = require('./utils/util');

var app = express();

app.use("/", routes.router)
app.listen(3000);
console.log("Servidor en escucha: Puerto" + 3000)
