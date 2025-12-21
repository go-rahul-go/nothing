import React from 'react'
import Clock from './Clock'
import heroimg from "../assets/hero.jpg"
import Calender from './Calender'
import GlyphUI from './GlyphUI'
import phone3 from "../assets/home assests/phone3_icon.png"
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div className='w-full min-h-[100vh] hero'>
      <HeroBg img={heroimg}/>
      <Clock/>
      <Calender/>
      <GlyphUI/>
      <HeroProduct/>
    </div>
  )
}

export default Hero;


const HeroBg=(props)=>{
  return(
    <div className='hero-bg'>
      <img src={props.img} alt="" className='w-full h-full object-cover'/>
    </div>
  )
}

const HeroProduct=()=>{
  return(
    <div className='hero-product' >
      <Link className='w-[90%] h-[22vh] md:w-[38vw] md:h-[30vh] my-[10px] mx-auto inner-hero-product' to="/phone3" target='_blank'>
        <div className='w-[50%] h-full  px-4 py-5 flex flex-col justify-between text-white '>
          <p className='text-2xl'>Come to Play</p>
          <p className='dotted text-xl font-bold'>Phone(3)</p>
        </div>
        <div className=' w-[40%] md:w-[200px] h-full '>
            <img src={phone3} alt="" className='w-full h-full object-contain'/>
        </div>
      </Link>
    </div>
  )
}