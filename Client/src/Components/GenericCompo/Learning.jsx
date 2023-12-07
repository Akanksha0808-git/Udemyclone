import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Learning.css"

const Learning = () => {
  const[data,setData] = useState()
  const url="https://udemyclone-api.onrender.com/api/getlearningdata"
  // const url="https://udemyclone-rx0k.onrender.com/getlearningdata"
  useEffect(()=>{
    axios.get(url)
    .then((res)=> setData(res.data)).catch(err=>console.log("My learning" ,err))
  },[])
  return (
    <div className="learningsection">
      <h1>My Learning</h1>
      <div className='learningsection1'>
      
      {
        data && data.map((item,index)=>{
          return(
            <div key={index} className='learningcard'>
              <img src={item.img} />
                <div>
                <h2>{item.heading}</h2>
                <p className=''>{item.des}</p>
                <p className='learnauthor'>{item.author}</p>
                <h3>{`${item.rating} ⭐⭐⭐⭐⭐`}</h3>
                <h2>{"₹"+item.price}</h2>
                </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Learning