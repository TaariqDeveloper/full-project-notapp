import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/ContextProvider";

function Navbar() {
  const { user } = useAuth();

  return (
    <div className="bg-gray-900 p-4 text-white flex justify-between items-center shadow-lg">
      {/* Logo Section */}
      <div className="text-2xl font-extrabold text-blue-400 hover:text-blue-300 transition">
        <Link to="/">NoteApp</Link>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search notes..."
        className="bg-gray-700 text-white px-4 py-2  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        {!user ? (
          <>
            <Link
              to="/Login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition shadow-md"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition shadow-md"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className="font-semibold text-lg">{user.name}</span>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition shadow-md">
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
