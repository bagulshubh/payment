'use client'
import React, { createContext , useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  
    const [user,setuser] = useState(null);
    
  
    return (
    <UserContext.Provider value={{user,setuser}}>
        <div>{children}</div>
    </UserContext.Provider>
  )
}
