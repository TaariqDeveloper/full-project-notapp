const express = require("express")
const userController = require('../controller/UserController')
const Router = express.Router()
Router.post("/api/auth/register", userController.CreateUser)
Router.post("/api/auth/Login", userController.CreateUserLogin)


module.exports = Router
