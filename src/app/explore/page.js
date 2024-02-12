'use client'

import { getAllUser } from '@/Service/CommonService';
import React, { useEffect, useState } from 'react'
import UserCard from '@/Components/UserCard';


const page = () => {

    const [data,setdata] = useState({});

    useEffect(()=>{

        const getUsers = async()=>{
            const users = await getAllUser();
            setdata(users);
            console.log(users);
        }

        getUsers();
        
    },[])

  return (
    <div className='explore-wrapper'>

        <h2>Active People</h2>

        <div className='user-card-con'>
            {
                Object.keys(data).length === 0 ? <div>Loading</div> : <div className='user-card-con'>
                    {
                        data.map((user)=>(
                            <UserCard user = {user}></UserCard>
                        ))
                    }
                </div>
            }
        </div>

    </div>
  )
}

export default page
