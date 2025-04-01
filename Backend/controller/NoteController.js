const noteModel = require("../Models/Note")


// create Note
const RegisterNote = async (req, res) => {
        try {
                const { title, description } = req.body;
                const NewNote = new noteModel({
                        title, description , userId: req.user.id
                })

                await NewNote.save();
                         return res.status(201).json({
            success: true,
            message: "Note created successfully",
            note: NewNote // Returning the created note
        });
        } catch (error) {
                 return res.status(500).json({ success: false, message: "Error in login server" });
        }
}


const ReadData = async (req, res) => {
        try {
                const notes = await noteModel.find()
                return res.status(200).json({ success: true, notes })
        } catch (error) {
                return res.status(500).json({success: false, message: "catn retrive notes"})
        }
}


module.exports = {RegisterNote, ReadData}




// const NoteModel = require("../Models/Note");

// // Create Note
// const RegisterNote = async (req, res) => {
//     try {
//         const { title, description } = req.body; // Ensure consistent casing

//         if (!req.user || !req.user.id) {
//             return res.status(401).json({ success: false, message: "Unauthorized user" });
//         }

//         // Create a new note
//         const newNote = new NoteModel({
//             title,
//             description, // Use lowercase 'description' to match schema
//             userId: req.user.id
//         });

//         // Save to the database
//         await newNote.save();

        // return res.status(201).json({
        //     success: true,
        //     message: "Note created successfully",
        //     note: newNote // Returning the created note
        // });
//     } catch (error) {
//         console.error("Error creating note:", error);
//         return res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };

// module.exports = { RegisterNote };
