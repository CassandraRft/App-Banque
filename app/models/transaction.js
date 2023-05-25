const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  date: {
    type: Number,
    required: true,
  },
});

const transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
