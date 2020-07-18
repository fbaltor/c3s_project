// Default modules
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

// Custom modules
const transactionController = require("./controllers/transactionController");
const db = require("./models/db");

var app = express();
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

let port = 3000;
app.listen(port, () => {
  console.log("Express server started at port : 3000");
});

app.use("/transaction", transactionController);
