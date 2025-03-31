const mongoose = require("mongoose")
const connectedMongodb = async() => {
        try {
                await mongoose.connect("mongodb://localhost:27017/nodeApp");
                console.log("Database connected successfully")
        } catch (error) {
                console.log("Error Connecting to Mongodb ", error.message)
        }
}
module.exports = connectedMongodb; 