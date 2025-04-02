const express = require("express")
const userController = require('../controller/UserController')
const middleware = require("../middleware/middleware")
const Router = express.Router()
Router.post("/api/auth/register", userController.CreateUser)
Router.post("/api/auth/Login", userController.CreateUserLogin)
Router.get("/api/auth/verify", middleware,userController.UserVarify)

module.exports = Router
