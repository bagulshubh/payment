import { UserContext } from '@/Context/UserContext'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

const Navbar = () => {

    const context = useContext(UserContext);
    const user = context.user;
    const router = useRouter();

    console.log(user)

    const logoutHandler = ()=>{
        localStorage.removeItem("user");
        context.setuser({});
    }

  return (
    <div className='nav-wrapper'>
      <h2>PayKeeper</h2>

      
        {
            user === null || Object.keys(user).length === 0 ? 
            <div className='auth-con'>
                <div onClick={()=>{router.push("/login")}} className='nav-btn'>Login</div>
                <div onClick={()=>{router.push("/signup")}} className='nav-btn'>Signup</div>
            </div> :
            <div className='auth-con'>
                <div className='nav-btn' onClick={()=>{router.push("/explore")}}>Contacts</div>
                <div className='nav-btn' onClick={logoutHandler}>Log Out</div>
            </div>
        }

          
    </div>
  )
}

export default Navbar
