const express = require('express')
const router = express.Router();
const userRoutes = require('./user.js')
const accountRoutes = require('./account.js')
const transactionRoutes= require('./transaction.js')

router.use("/auth", userRoutes)
router.use("/account", accountRoutes)
router.use("/transaction", transactionRoutes)

module.exports = router