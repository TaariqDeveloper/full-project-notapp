// import React from "react";

// function NoteModel() {
//   return (
//     <div className=" ml-[35%]  flex justify-center absolute top-20 items-center h-screen ">
//       <div className="rounded-xl p-4 w-[800px] bg-white h-[600px] text-black">
//         <h1 className="font-bold text-2xl pb-3 ">Add New Note</h1>
//         <div>
//           <input
//             type="text"
//             className="w-[100%]  border-2 sborder-gray-600 p-3 rounded text-gray-400 text-3xl"
//             placeholder="Note Title"
//           />
//         </div>
//         <div className="mt-6">
//           <textarea
//             className="w-[100%] h-[80px] border-2 border-gray-600 p-3 rounded text-gray-400 text-3xl"
//             placeholder="Note Descriptions "
//             name=""
//             id=""
//           ></textarea>
//         </div>
//         <div className="mt-4">
//           <button className="bg-blue-600 p-3 text-2xl text-white  rounded-2xl ">
//             Add Note
//           </button>
//         </div>
//         <div>
//           <button className="text-red-500 text-2xl pt-4">Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NoteModel;

import React from "react";

function NoteModel() {
  return (
    <div className=" absolute top-60 ml-[35%] w-[800px]  ">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-3xl h-[600px] text-black">
        <h1 className="font-bold text-3xl text-gray-800 mb-6 text-center border-b pb-4">
          📝 Add New Note
        </h1>

        {/* Note Title */}
        <div>
          <input
            type="text"
            className="w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 p-4 rounded-lg text-gray-700 text-xl mb-6 transition duration-200"
            placeholder="Note Title"
          />
        </div>

        {/* Note Description */}
        <div>
          <textarea
            className="w-full h-32 border border-gray-300 focus:ring-2 focus:ring-blue-400 p-4 rounded-lg text-gray-700 text-lg transition duration-200 resize-none"
            placeholder="Note Description"
          ></textarea>
        </div>

        {/* Add Button */}
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-xl font-semibold rounded-xl shadow-md transition duration-300">
            ➕ Add Note
          </button>
        </div>

        {/* Cancel Button */}
        <div className="mt-4">
          <button className="text-red-500 hover:text-red-600 text-xl transition font-semibold">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteModel;
