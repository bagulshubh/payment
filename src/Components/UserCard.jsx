'use client'
import React from 'react'

const UserCard = (props) => {
    const user = props.user;

    const connectHandler = ()=>{
        
    }

  return (
    <div className='user-card'> 
      {user.name}
      <div className='connect-btn' onClick={connectHandler}>Connect</div>
    </div>
  )
}

export default UserCard
