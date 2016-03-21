var express = require("express");

var app = express();

app.use(function(req, res, next) {
   
    console.log(`${req.method} requested for '${req.url}'`);
    next();
    
});


app.use(express.static("./public"));

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;