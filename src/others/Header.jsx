import React, { useState } from 'react'

function Header(props) {
   
//  const [userName,setuserName]    = useState('')
//  if(!data) {
//   setuserName('Admin')
//  } else {
//   setuserName(data.name)
//  }
  
const logOutUser = ()=>{
  localStorage.setItem('loggedInUser',' ')
  props.changeUser('')
}

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-xl font-medium leading-4'>hello <br /><span className='font-semibold text-2xl'>userName✌️</span></h1>
      <button onClick={logOutUser} className='bg-red-400 px-2 py-1  rounded-md'>Log Out</button>
    </div>
  )
}

export default Header
