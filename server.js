var express = require("express");  
var bodyParser = require("body-parser");
var taskRoutes = require("./task-routes");

var app = express();
app.use(bodyParser.json());
app.use("/", taskRoutes);
app.use(express.static(__dirname + "/public"));

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("server running");
})