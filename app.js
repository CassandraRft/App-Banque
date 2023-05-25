require("./app/config/db")
const express = require('express')
const app = express()
module.exports=app

const router = require("./app/routes/index.js");
//Ajout des routes
app.use(express.json());

app.use("/api", router);
app.use("/user", router);
app.use("/account", router);