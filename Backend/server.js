const express = require('express')
const cors = require('cors')
const ConnectedDb = require("./db/Connection")
const AuthRoute = require('./router/userRoute.js');
const NoteAuth = require("./router/NoteRoute.js")

const port = 6002;

const app = express();
app.use(cors())
app.use(express.json())
app.use(AuthRoute)
app.use(NoteAuth)

app.listen(port, ()=> {
        ConnectedDb()
        console.log(`server is running port number ${port}`)
 })

