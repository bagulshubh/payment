'use client'
import { UserContext } from '@/Context/UserContext'
import { login } from '@/Service/UserService'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

const page = () => {

  const context = useContext(UserContext)

  const [data,setdata] = useState({
    name:"",
    password:"",
  })
  const router = useRouter();

  const [res,setres] = useState("");

  const changeHandler = (event) =>{
    setdata((prev)=>({
      ...prev,
      [event.target.name] : event.target.value
    }));
  }
  
  const clickHandler = async()=>{
    const output = await login(data)
    if(output?.success === false){
      setres(output.message)
    }
    else{
      console.log(output[0]);
      context.setuser(output[0])
      localStorage.setItem("user",JSON.stringify(output[0]))
      router.push("/")
    }
  
  }

  return (
    <div className='signup-wrapper'>

      <h2>Login</h2>

      <input type='text' placeholder='Enter Name' name='name' value={data.name} onChange={changeHandler}></input>

      <input type='password' placeholder='Enter Password' name='password' value={data.password} onChange={changeHandler}></input>

      <div className='submit-btn' onClick={clickHandler}>Login</div>

      <div className='line-error'>{ res } </div>

    </div>
  )
}

export default page
