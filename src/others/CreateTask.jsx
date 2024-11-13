import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

function CreateTask() {

  const [userdata,setuserData] = useContext(AuthContext)
 

  const [title, settitle] = useState("");
  const [date, setDate] = useState();
  const [description, setdescription] = useState("");
  const [Assign, setAssign] = useState("");
  const [Category, setCategory] = useState("");

  const [Newtask, setNewtask] = useState({});

  const HandleSubmit = (e) => {
    e.preventDefault();

    setNewtask({
      title,
      date,
      description,
      Category,
      active: true,
      completed: false,
      failed: false,
    });

    const data = userdata;
 
    console.log(data);
    
    data.forEach((elem) => {
      if (Assign == elem.name) {
        elem.tasks.push(Newtask);
        console.log(elem);
      }
    });
    console.log(data);
    
    setuserData(data)
    settitle("");
    setDate("");
    setCategory("");
    setAssign("");
    setdescription("");
  };

  return (
    <div className="">
      <div className="bg-zinc-800 mt-5 p-10 rounded-md ">
        <form
          onSubmit={(e) => HandleSubmit(e)}
          className="flex flex-wrap flex-start justify-between "
        >
          <div className="w-1/2 flex flex-col gap-4">
            <div className="">
              <h3>Task Title</h3>
              <input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="w-1/2 p-1 bg-transparent outline-none border-2 border-gray-400 rounded"
                type="text"
                placeholder="Make a UI Design"
              />
            </div>
            <div>
              <h3>Date</h3>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-1/2 p-1 bg-transparent outline-none border-2 border-gray-400 rounded"
                type="date"
              />
            </div>
            <div>
              <h3>Assign To</h3>
              <input
                value={Assign}
                onChange={(e) => setAssign(e.target.value)}
                className="w-1/2 p-1 bg-transparent outline-none border-2 border-gray-400 rounded"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h3>Category</h3>
              <input
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-1/2 p-1 bg-transparent outline-none border-2 border-gray-400 rounded"
                type="text"
                placeholder="Design,Development,etc"
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-2">
            <h3 className="text-2xl font-medium">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className=" p-1 bg-transparent outline-none border-2 border-gray-400 rounded"
              name=""
              cols="30"
              rows="7"
              id=""
            ></textarea>
            <button className="bg-lime-600 py-3 rounded-lg mt-4 text-xl">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
