const mongoose = require("mongoose");
require("./transaction.model");

let database = "mongodb://localhost:3000/TransactionDB";
mongoose.connect(database, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log("Connection with database succeeded.");
  } else {
    console.log("Error in database connection : " + err);
  }
});
