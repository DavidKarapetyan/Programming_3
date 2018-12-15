var express = require('express');
var app = express();
var server = require("http").server(app);
var io = require("socket.io").server(server);

app.use(express.static("."));
app.get("/", function(req,res){
  res.redirect("./public/index.html");
});
server.listen(3000);