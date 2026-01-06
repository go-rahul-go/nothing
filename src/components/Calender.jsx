import React, { useEffect } from 'react'
import { useState } from 'react'

const Calender = () => {
    const [date,setDate]=useState();
    const [day,setDay]=useState()
    const [month,setMonth]=useState();

    const whatIsToday=(num)=>{
        const days=["sun","mon","tue","wed","thu","fri","sat"]
        return days[num];
    }

    const whatMonth=(num)=>{
      const month=["january","febuary","march","april","may","june","july","august","september","octocer","november","december"]
      console.log(month[num])

      return month[num]

    }
    useEffect(()=>{
        let d=new Date();
        setDate(d.getDate())
        console.log(whatIsToday(d.getDay()))
        setDay(whatIsToday(d.getDay()))
        setMonth(whatMonth(d.getMonth()))
        
    },[])

  return (
    <div className='calender'>
            <div className='text-end pr-2  py-[3px] capitalize text-[0.8rem] bg-slate-200 font-medium'>{day}</div>
            <div className='text-center  text-5xl font-semibold '>
              {date}
            </div>
            <div className='text-center text-[0.8rem] uppercase font-normal'>{month}</div>
           
    </div>
  )
}

export default Calender