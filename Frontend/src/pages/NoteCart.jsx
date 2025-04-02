import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
function NoteCart({ note, onEdit, deleteNote }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-md border w-[300px] h-[200px] border-gray-200 hover:shadow-lg transition-all duration-300">
      {/* Note Title */}
      <h1 className="text-2xl font-semibold text-gray-800 truncate">
        {note.title}
      </h1>

      {/* Note Description */}
      <p className="text-gray-600 text-xl mt-1 line-clamp-3">
        {note.description}
      </p>

      {/* Action Buttons */}
      <div className="flex justify-end items-center mt-20 space-x-2">
        <button className="p-1.5 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all duration-200">
          <FaEdit size={14} onClick={() => onEdit(note)} />
        </button>
        <button className="p-1.5 rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200">
          <FaTrash size={14} onClick={() => deleteNote(note._id)} />
        </button>
      </div>
    </div>
  );
}

export default NoteCart;
