import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FaildTask from "./FaildTask";
import NewTask from "./NewTask";

function TaskList({ data }) {
  return (
    <div
      id="TaskList"
      className="w-full h-[64%] mt-10 overflow-x-auto  flex items-center justify-start gap-5 flex-nowrap"
    >
      {data.tasks.map((elem,idx) => {
          if(elem.active) {
            return <AcceptTask key={idx} data={elem}/>
          }
          if(elem.failed) {
            return <FaildTask key={idx} data={elem}/>
          }
          if(elem.completed){
            return <CompleteTask key={idx} data={elem}/>
          }
        
      })}
    </div>
  );
}

export default TaskList;
