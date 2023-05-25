const express = require("express");
const router = express();
const userCtrl = require("../controllers/user.js");

router.post("/account", userCtrl.Account, function (req, res) {
  const { username, email, password } = req.body;
  res.send("Welcome !");
});

const newAccount = new Account({
  username: username,
  email: email,
  password: password,
});

module.exports = router;
