import React, { useEffect, useState } from "react";
function NoteModel({ closeModel, addNote, current, edditNote }) {
  const [title, setTitele] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (current) {
      setTitele(current.title);
      setDescription(current.description);
    }
  }, [current]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (current) {
      edditNote(current._id, title, description);
    } else {
      await addNote(title, description);
    }
  };
  return (
    <div className=" absolute top-60 ml-[35%] w-[800px]  ">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-3xl h-[600px] text-black">
        <h1 className="font-bold text-3xl text-gray-800 mb-6 text-center border-b pb-4">
          {current ? "Eddit Note" : " Add New Note"}
          📝
        </h1>

        {/* Note Title */}
        <div>
          <input
            value={title}
            onChange={(e) => setTitele(e.target.value)}
            type="text"
            className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-4 rounded-lg text-gray-700 text-xl mb-6 transition duration-200"
            placeholder="Note Title"
          />
        </div>

        {/* Note Description */}
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-32 border border-gray-300 focus:ring-2 focus:ring-blue-400 p-4 rounded-lg text-gray-700 text-lg transition duration-200 resize-none"
            placeholder="Note Description"
          ></textarea>
        </div>

        {/* Add Button */}
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-xl font-semibold rounded-xl shadow-md transition duration-300"
          >
            {current ? "Update Note" : "➕ Add Note"}
          </button>
        </div>

        {/* Cancel Button */}
        <div className="mt-4">
          <button
            onClick={closeModel}
            className="text-red-500 hover:text-red-600 text-xl transition font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteModel;
