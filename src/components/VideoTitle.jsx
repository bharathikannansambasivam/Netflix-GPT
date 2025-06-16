import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className=" absolute bg-gradient-to-r from-black  text-white w-screen h-screen  flex flex-col justify-center  items-center pl-10">
      <div className="flex flex-col gap-3">
        <h2 className="     font-black text-3xl   ">{title}</h2>
        <h4 className="  w-1/2    text-md  ">{overview}</h4>
        <div className=" w-full mt-5 flex gap-6">
          <button className="bg-white text-black px-10 py-3 rounded-md hover:opacity-75 ">
            Play Now{" "}
          </button>
          <button className="bg-gray-700 text-white px-10 py-3 rounded-md hover:opacity-75 ">
            More Info{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
