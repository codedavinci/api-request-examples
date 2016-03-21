var express = require("express");
var cors = require("cors");
var app = express();

var kratosTerms = [
    {
      term: "Money",
      defined: "To make it rain" 
    },
    {
      term: "Cars",
      defined: "We used them to make life easier"
    },
    {
        term: "Credit",
        defined: "Save our life when we don't have money"
    }
    
];

app.use(function(req, res, next) {
   
    console.log(`${req.method} requested for '${req.url}'`);
    next();
    
});


app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res){
   res.json(kratosTerms); 
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;