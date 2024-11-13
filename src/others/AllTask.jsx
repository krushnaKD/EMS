import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const AllTask = () => {
    const [userdata,setuserData] = useContext(AuthContext)
    console.log(userdata);
    
  return (
    <div className="w-full flex flex-start flex-col  p- mt-4 text-zinc-100 overflow " >
      <div className="w-full h-10 bg-red-200 flex gap-3">
        <h1 className="w-1/2 h-10 bg-orange-500 text-center text-2xl font-semibold">NAME</h1>
        <h1 className="w-1/2 h-10 bg-green-500 text-2xl font-semibold text-center">TASK</h1>
        <h1 className="w-1/2 h-10 bg-yellow-500 text-2xl font-semibold text-center overflow-hidden">TASK-STATUS</h1>
        <h1 className="w-1/2 h-10 bg-red-500 text-2xl font-semibold text-center">FAILED</h1>
      </div>
      {userdata.map((elem,i)=>{
      
      return    <div key={i} className= " gap-2  flex items-center justify-between ">
          <h1 className="w-1/2 text-orange-400  border-x-4 border text-xl text-center mt-2">{elem.name}</h1>
          <h2 className="w-1/2 text-green-500 text-center border-x-4 border text-xl mt-2">{elem.taskCount.active}</h2>
          <h5 className="w-1/2 text-yellow-500 border-x-4 border text-xl text-center mt-2">{elem.taskCount.completed > 2 ? "Completed":"failed"}</h5>
          <h4 className="w-1/2 text-red-500 border-x-4 border text-xl text-center mt-2">{elem.taskCount.failed}</h4>
        </div>
          {console.log(elem.tasks.completed);
          }
      }
      )}
    </div>
  );
};

export default AllTask;
