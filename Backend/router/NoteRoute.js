const express = require("express")
const noteController = require('../controller/NoteController')
const middleware = require("../middleware/middleware")
const Router = express.Router()
Router.post("/api/note/add", middleware,noteController.RegisterNote)
Router.get("/api/note/read", noteController.ReadData)
Router.put("/api/note/update/:id", noteController.updateData)
Router.delete("/api/note/delete/:id", noteController.DeletNote)



module.exports = Router
