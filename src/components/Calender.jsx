import React, { useEffect } from 'react'
import { useState } from 'react'

const Calender = () => {
    const [date,setDate]=useState();
    const [day,setDay]=useState()

    const whatIsToday=(num)=>{
        const days=["sun","mon","tue","wed","thu","fri","sat"]
        return days[num];
    }
    useEffect(()=>{
        let d=new Date();
        setDate(d.getDate())
        console.log(whatIsToday(d.getDay()))
        setDay(whatIsToday(d.getDay()))
    },[])

  return (
    <div className='calender'>
            <span className='c-day'>{day}</span>
            <div className='w-full h-[75%] border border-red-500 absolute bottom-0 left-0 text-6xl grid place-items-center font-medium'>
                {date}
            </div>
    </div>
  )
}

export default Calender