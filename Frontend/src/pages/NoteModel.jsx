import React from "react";

function NoteModel() {
  return (
    <div className=" ml-[35%]  flex justify-center absolute top-20 items-center h-screen ">
      <div className="rounded-xl p-4 w-[800px] bg-white h-[600px] text-black">
        <h1 className="font-bold text-2xl pb-3 ">Add New Note</h1>
        <div>
          <input
            type="text"
            className="w-[100%]  border-2 border-gray-600 p-3 rounded text-gray-400 text-3xl"
            placeholder="Note Title"
          />
        </div>
        <div className="mt-6">
          <textarea
            className="w-[100%] h-[80px] border-2 border-gray-600 p-3 rounded text-gray-400 text-3xl"
            placeholder="Note Descriptions "
            name=""
            id=""
          ></textarea>
        </div>
        <div className="mt-4">
          <button className="bg-blue-600 p-3 text-2xl text-white  rounded-2xl ">
            Add Note
          </button>
        </div>
        <div>
          <button className="text-red-500 text-2xl pt-4">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default NoteModel;
