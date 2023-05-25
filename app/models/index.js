const mongoose = require("mongoose");
mongoose.connect("lien de ma base de donnée localhost mongodb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const utilisateurSchema = new mongoose.Schema({
  nom: String,
  age: Number,
  email: String,
});

const Utilisateur = mongoose.model("Utilisateur", utilisateurSchema);
