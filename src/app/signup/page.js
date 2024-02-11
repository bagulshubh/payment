'use client'

import React from 'react'
import { useEffect, useState } from "react";
import { createUser } from "@/Service/UserService";
import { useRouter } from 'next/navigation';

const page = () => {

    const router = useRouter();
    const [data,setdata] = useState({
        name:"",
        password:"",
        confirmPassword:""
      })
      const [res,setres] = useState("");
      const clickHandler = async()=>{
        const output = await createUser(data);
        console.log(output);
        if(output === "Success"){
            router.push("/login")
        }
        else{
            setres(output);
        }
      }
    
      const changeHandler = (event) => {
        setdata((prev) => ({
          ...prev,  // spread the previous state
          [event.target.name]: event.target.value, // update the specific property
        }));
        console.log(data);
      };

  return (
    <div className='signup-wrapper'>
      
        <h2>SignUp</h2>

        <input type="text" placeholder="Enter Your Name" value={data.name} name="name" onChange={changeHandler}></input>

        <input type="password" placeholder="Enter password" value={data.password} name="password" onChange={changeHandler}></input>

        <input type='password' placeholder='Confirm Password' value={data.confirmPassword} name='confirmPassword' onChange={changeHandler}></input>

        <div onClick={clickHandler} className='submit-btn'>Create</div>

        <div className='line-error'>{res !== "" ? res : "" } </div>

    </div>
  )
}

export default page

