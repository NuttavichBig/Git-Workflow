const express = require("express");
const authRoute = express.Router();

authRoute.post('/login', (req, res) => {})
authRoute.post('/register', (req, res) => {})

module.exports = authRoute