// const mongoose = require("mongoose")
// const NoteSchema = mongoose.Schema({
//         title: {
//                 type: String,
//                 require:true
//         },
//         Description: {
//                 type: String,
//                 require:true
//         },
//         userId: {
//                 type:mongoose.Schema.type.ObjectId, ref: "User"
//         }
// })

// module.exports = mongoose.model("Note", NoteSchema)

const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // Corrected from 'require' to 'required'
    },
    description: { // Changed 'Description' to 'description' (for consistency)
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Fixed 'type' to 'Types.ObjectId'
        ref: "User",
        required: true // Ensures every note is linked to a user
    }
});

module.exports = mongoose.model("Note", NoteSchema);
