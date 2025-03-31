// import React from "react";
// import Navbar from "../Components/Navbar";

// function Home() {
//   return (
//     <div className="bg-green-500 min-h-screen">
//       <Navbar />
//       <button className=" fixed right-4 bottom-4 bg-teal-500 text-white font-bold p-4 rounded-full">
//         +
//       </button>
//     </div>
//   );
// }

// export default Home;

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import NoteModel from "./NoteModel";

function Home() {
  const [ismodelOpen, setIsmodelOpen] = useState(false);
  const closeModel = () => {
    setIsmodelOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white">
      <Navbar />

      {/* Center Welcome Content */}
      <motion.div
        className="flex flex-col items-center justify-center h-[80vh] text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.div>

      <motion.button
        onClick={() => setIsmodelOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-5 bottom-5 bg-white text-green-600 text-3xl font-bold p-4 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300"
      >
        +
      </motion.button>
      {ismodelOpen && <NoteModel closeModel={closeModel} />}
    </div>
  );
}

export default Home;
