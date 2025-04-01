import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import NoteModel from "./NoteModel";
import NoteCart from "./NoteCart";

function Home() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [notes, setNote] = useState([]);
  const [current, setCurrent] = useState(null);

  const closeModel = () => {
    setIsModelOpen(false);
  };

  const fetchNote = async () => {
    try {
      const { data } = await axios.get("http://localhost:6002/api/note/read");
      setNote(data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = (note) => {
    setCurrent(note);
    setIsModelOpen(true);
  };

  useEffect(() => {
    fetchNote();
  }, []);

  const edditNote = async (id, title, description) => {
    try {
      const response = await axios.put(
        `http://localhost:6002/api/note/update/${id}`,
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        closeModel();
        fetchNote();
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        "http://localhost:6002/api/note/add",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        closeModel();
        fetchNote();
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white">
      <Navbar />

      <div className="flex justify-center gap-20 flex-wrap mt-20 ">
        {notes.map((note) => (
          <NoteCart note={note} onEdit={onEdit} />
        ))}
      </div>

      <motion.button
        onClick={() => setIsModelOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-5 bottom-5 bg-white text-green-600 text-3xl font-bold p-4 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300"
      >
        +
      </motion.button>

      {isModelOpen && (
        <NoteModel
          closeModel={closeModel}
          addNote={addNote}
          current={current}
          edditNote={edditNote}
        />
      )}
    </div>
  );
}

export default Home;
