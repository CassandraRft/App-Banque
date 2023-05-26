const mongoose = require("mongoose");

const bankAccountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "The user field is required."],
  },
  bankName: {
    type: String,
    required: [true, "The bankName field is required."],
  },
  customName: {
    type: String,
    maxlength: [50, "The custom name can't exceed 50 characters, got {VALUE}."],
    required: [true, "The customName field is required."],
  },
  lastUpdated: {
    type: Date,
  },
});

bankAccountSchema.pre("save", async function (next) {
    try {
      this.lastUpdated = Date.now();
      next();
    } catch (error) {
      next(error);
    }
  });
  
  bankAccountSchema.pre("findOneAndUpdate", function (next) {
    this.set({ lastUpdated: Date.now() });
    next();
  });
  
  const BankAccount = mongoose.model("BankAccount", bankAccountSchema);
  
  module.exports = BankAccount;
  