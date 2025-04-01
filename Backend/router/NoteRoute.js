const express = require("express")
const noteController = require('../controller/NoteController')
const middleware = require("../middleware/middleware")
const Router = express.Router()
Router.post("/api/note/add", middleware,noteController.RegisterNote)
Router.get("/api/note/read", noteController.ReadData)



module.exports = Router
