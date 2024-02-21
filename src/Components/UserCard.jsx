'use client'
import { UserContext } from '@/Context/UserContext';
import React, { useContext, useEffect, useState } from 'react'
import { connectUsers } from '@/Service/CommonService';
import { useRouter } from 'next/navigation';


const UserCard = (props) => {
    const user = props.user;
    const context = useContext(UserContext)
    const router = useRouter();

    const [loggedUser,setLoggedUser] = useState(context.user); 
    const [isConnected,setisconnected] =  useState(context.user?.connectedArr && context.user?.connectedArr.includes(user._id));
    console.log(isConnected)
    useEffect(() => {
      setisconnected(context.user?.connectedArr && context.user?.connectedArr.includes(user._id));
      console.log(isConnected)
    },[context.user,loggedUser]);
    
 
    const connectHandler = async()=>{
      console.log("object");   
      console.log(loggedUser,user)
      const newUser = await connectUsers(loggedUser._id,user._id);
      context.setuser(newUser);
      setLoggedUser(newUser);
      router.push("/connected")
    }

  return (
    <div className='user-card'> 

      {
        isConnected === true ? <></> : 
        <div className='user-card-2'>
          {user.name}
          <div className='connect-btn' onClick={connectHandler}>Connect</div>
        </div>
      }

      
    </div>
  )
}

export default UserCard
