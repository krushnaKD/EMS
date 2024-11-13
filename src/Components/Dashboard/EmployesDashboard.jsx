import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployesDashboard = (props) => {
  
  
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen text-white'>
      <Header data={props.data} changeUser={props.changeUser}/>
      <TaskListNumber data={props.data}/>
      <TaskList  data={props.data}/>
    </div>
  )
}

export default EmployesDashboard
