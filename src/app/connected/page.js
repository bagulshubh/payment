'use client'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/Context/UserContext';
import ConnectedCard from '@/Components/ConnectedCard';
import { useRouter } from 'next/navigation';


const page = () => {

    const context = useContext(UserContext);
    const user = context.user;
    const router = useRouter();

    const [data,setdata] = useState(user?.connectedArr);

    useEffect(()=>{
        setdata(user.connectedArr);
    },[user])


  return (
    <div className='connected-wrapper'>
        <h2>Connected People</h2>
        <div className='connected-card-con'>{
            data.map((item)=>{
                return (
                    <ConnectedCard item={item}></ConnectedCard>
                )
            })
        }</div>      
        <div className='red-btn' onClick={()=>{router.push("explore")}}>Connect More People</div>
    </div>
  )
}

export default page
