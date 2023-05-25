const express = require("express");
const router = express();
const userRoutes = require("./user.js"); //Ce fichier n’existe pas encore.
const accountRoutes = require("./account.js");

router.use("/auth", userRoutes);
router.use("/account", accountRoutes);

module.exports = router;
