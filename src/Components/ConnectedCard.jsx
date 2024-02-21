import { getById } from '@/Service/UserService';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ConnectedCard = (props) => {

    const item = props.item;
    console.log(item)
    const [data,setdata] = useState(null)

    const clickHandler = ()=>{
      console.log("Clicked")
      
    }

    useEffect(()=>{
        const getUser = async(id)=>{
            const user = await getById(id);
            console.log(user)
            setdata(user);
        }
        getUser(item);
    },[item])

    return (
    <div className='connected-card'>
      {
        data === null ? <Skeleton  baseColor='#000'></Skeleton> : <div onClick={clickHandler}>
            {data.name}
        </div>
      }
    </div>
  )
}

export default ConnectedCard
