const express = require("express");
const mongoose = require("mongoose");
const Transaction = mongoose.model("Transaction");

var router = express.Router();

router.get("/", (req, res) => {
  res.render("Insert transaction record", {
    viewTitle: "Insert transaction",
  });
});

router.post("/", (req, res) => {
  if (req.body._id == "") {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

function insertRecord(req, res) {
  // Creating new transaction entry
  var transaction = new Transaction();
  transaction.value = req.body.value;
  transaction.origin = req.body.origin;
  transaction.classification = req.body.classification;
  transaction.date = req.body.date;

  // Saving in the database
  transaction.save();
}

function updateRecord(req, res) {
  Transaction.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect("/transaction/list");
      }
    }
  );
}

router.get("/transaction/list", (req, res) => {
  Transaction.find((err, docs) => {
    if (!err) {
      res.render("transaction/list", {
        list: docs,
      });
    } else {
      console.log("Error in retrieving transaction list :" + err);
    }
  });
});

router.get("/:id", (req, res) => {
  Transaction.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("Insert transaction record", {
        viewTitle: "Update a transaction",
        transaction: doc,
      });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Transaction.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/transaction/list");
    } else {
      console.log("Error in transaction delete :" + err);
    }
  });
});

module.exports = router;
