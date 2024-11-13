import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="h-[80%] w-[27%] bg-blue-400 p-5 rounded-lg ">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-500 px-3 py-1 rounded-md">{data.category}</h2>
        <h2 className="font-medium text-sm">{data.date}</h2>
      </div>
      <h1 className="mt-5 text-lg font-semibold">
      {data.title}
      </h1>
      <p className="text-sm mt-2">
      {data.description}
      </p>
      <div className="mt-10 flex">
        <button className="bg-green-500 px-2 py-1 rounded-md">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
