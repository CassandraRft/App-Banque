exports.signup = (req, res);
res.send("You are signup");

exports.login = (req, res);
res.send("You are login");

Character.save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Utilisateur enregistré avec succès.");
  }
});
