import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = createContext()
function AuthProvider({children}) {

    const [userData,setuserData] = useState(null);
    useEffect(()=>{
        const {employees} = getLocalStorage()
        setuserData(employees)
    },[])


  return (
    <div>
      <AuthContext.Provider value={[userData,setuserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
