import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

const AdminDashboard = (props) => {
   
   
  return (
    <div className="w-full h-full p-10 bg-[#1c1c1c] text-white">
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask data={props.data} />
    </div>
  );
};

export default AdminDashboard;
