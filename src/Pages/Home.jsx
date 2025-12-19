import React, { useEffect,useState } from 'react'
import { useContext } from 'react'
import { MenuContext } from '../App'
import Hero from '../components/Hero'
import {data} from "../data"
import HomeCard from '../components/HomeCard'
import Footer from '../components/Footer'

const Home = () => {
    const menu=useContext(MenuContext)
    
  
 
  return (
    <div className={menu?"home-control":"home"}>
        <Hero/>
        {
          data.map((item,index)=>{
            return(
              <HomeCard background={item.background} key={index} info={item} iconURL={item.icon} title={item.title} subtitle={item.subtitle}/>
            )
          })
        }
        <Footer/>
    </div>
  )
}

export default Home;

