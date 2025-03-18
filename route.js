const express = require('express')
const register = require('./userController.js')
const route = express.Router();

route.post("/auth/signup",register);

module.exports = route;