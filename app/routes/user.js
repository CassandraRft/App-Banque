const express = require("express");
const router = express();
const userCtrl = require("../controllers/user.js");

router.post("/signup", userCtrl.signup, function (req, res) {
  res.send("You are signup");
});
router.post("/login", userCtrl.login, function (req, res) {
  res.send("You are login");
});

module.exports = router;
