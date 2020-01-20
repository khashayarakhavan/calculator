//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended : true})); //this extende means you can send Nested objects

app.get("/", function(req, res){ //reaching home
  res.sendFile(__dirname + "/bmiCalculator.html"); //send homepage file
}
);

app.post("/bmicalculator", function(req, res){
  console.log(req.body);
  var weight= parseFloat(req.body.weightN).toFixed(3);
  var height= parseFloat(req.body.heightN).toFixed(3);
  var result= weight/(height * height);
  result = result.toFixed(3);
  res.send("your bmi is " + result + " in standard metric.");
}
);

app.listen(3000, function(req, res){
  console.log("The server is alive :-)");
}
);
