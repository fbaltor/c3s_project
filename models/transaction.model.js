const mongoose = require("mongoose");

var transactionSchema = new mongoose.Schema({
  value: {
    type: String,
  },
  origin: {
    type: String,
  },
  classification: {
    type: String,
  },
  date: {
    type: String,
  },
});

mongoose.model("Transaction", transactionSchema);
