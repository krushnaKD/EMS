import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
       <div className='w-[45%] bg-red-500 py-6 px-9 rounded-lg'>
      <h1 className='font-semibold text-3xl'>{data.taskCount.active}</h1>
       <h2 className='font-medium text-xl'>Active Task</h2>
       </div>
       <div className='w-[45%] bg-blue-400 py-6 px-9 rounded-lg'>
      <h1 className='font-semibold text-3xl'>{data.taskCount.completed}</h1>
       <h2 className='font-medium text-xl'>Completed Task</h2>
       </div>
       <div className='w-[45%] bg-orange-400 py-6 px-9 rounded-lg'>
      <h1 className='font-semibold text-3xl'>{data.taskCount.failed}</h1>
       <h2 className='font-medium text-xl'>Failed Task</h2>
       </div>
       <div className='w-[45%] bg-lime-400 py-6 px-9 rounded-lg'>
      <h1 className='font-semibold text-3xl'>{data.taskCount.newTask}</h1>
       <h2 className='font-medium text-xl'>New Task</h2>
       </div>
    </div>
  )
}

export default TaskListNumber
