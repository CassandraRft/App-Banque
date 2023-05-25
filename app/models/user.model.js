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

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("email") || !this.email) {
      return next();
    }
    // Encrypter l'email avec votre logique personnalisée
    this.email = this.email.toLowerCase().trim();
    const encryptedEmail = await encrypt(this.email);
    this.email = encryptedEmail;

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password") || !this.password) {
      return next();
    }

    // Hasher le mot de passe avec bcrypt
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

