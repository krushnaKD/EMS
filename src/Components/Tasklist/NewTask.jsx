import React from "react";

const NewTask = () => {
  return (
    <div className="h-[80%] w-[27%] bg-lime-400 p-5 rounded-lg ">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-500 px-3 py-1 rounded-md">High</h2>
        <h2 className="font-medium text-sm">27 Oct 2024</h2>
      </div>
      <h1 className="mt-5 text-lg font-semibold">
        Make A Good Looking Website!
      </h1>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem pariatur
        eum iure minus. Hic, esse.
      </p>
      <div className="mt-10">
        <button className="bg-blue-500 px-2 py-1 rounded-md ">New Task</button>
      </div>
    </div>
  );
};

export default NewTask;
