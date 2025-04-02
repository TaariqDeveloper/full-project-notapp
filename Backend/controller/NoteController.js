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
                const notes = await noteModel.find({ userId: req.user.id })
                return res.status(200).json({ success: true, notes })
        } catch (error) {
                return res.status(500).json({success: false, message: "catn retrive notes"})
        }
}

const updateData = async (req, res) => {
        try {
                const { id } = req.params;
                const updateNote = await noteModel.findByIdAndUpdate(id, req.body)
                return res.status(200).json({ success: true, updateNote })
        }catch (error) {
                return res.status(500).json({success: false, message: "catn update notes"})
        }
}

const DeletNote = async (req, res) => {
        try {
                const { id } = req.params;
                const deleteNote = await noteModel.findByIdAndDelete(id, req.body)
                return res.status(200).json({ success: true, deleteNote })
        }catch (error) {
                return res.status(500).json({success: false, message: "catn delete notes"})
        }
}





module.exports = {RegisterNote, ReadData, updateData, DeletNote}


