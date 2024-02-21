'use client'
import React, { createContext , useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  
    const [user,setuser] = useState(JSON.parse(localStorage.getItem("user")));
    
  
    return (
    <UserContext.Provider value={{user,setuser}}>
        <div>{children}</div>
    </UserContext.Provider>
  )
}
