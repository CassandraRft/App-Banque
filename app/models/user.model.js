// Import de Mongoose
const mongoose = require("mongoose");
// Création du schéma pour la collection "users"
const userSchema = new mongoose.Schema({
  lastname: { type: String, required: true },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    validate: {
      validator: function (email) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
      },
      message: "invalid mail",
    },
  },

  password: {
    type: String,
    required: [true, "password is required"],
    validate: {
      validator: function (password) {
        return /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)/.test(password);
      },
      message: "invalid password",
    },
  },
});
userSchema.plugin(uniqueValidator);
const User = mongoose.model(User, userSchema);
module.exports = User;
