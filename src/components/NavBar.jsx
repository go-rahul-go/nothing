import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router'

import menuIcon from "../assets/menu.svg"
import closeIcon from "../assets/close.svg"
import storeIcon from "../assets/cart.svg"

const NavBar = ({ changeMenuOpen }) => {

  const [prevPos, changePrevPos] = useState(window.pageYOffset);

  const [showMenu, changeMenu] = useState(false)
  const [menuVis, menuVisible] = useState(true)

  
  useEffect(() => {

    function handleScroll() {
      let currentPos = window.pageYOffset;
      menuVisible(prevPos > currentPos)
      changePrevPos(currentPos)
    }
    try {
      window.addEventListener("scroll", handleScroll)
    }
    catch (e) {
      console.log("something wrong")
    }


    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [prevPos])
  return (
    <div className={`${menuVis ? "navbar" : "navbar-hide"} ${showMenu ? "navbar-expand glass" : "no-glass"}`}>
      <div className=' w-[85%] md:w-[40%] h-full overflow-hidden menu-items'>
        <div className='header  h-[40px]'>
          <div onClick={() => { changeMenu(!showMenu); changeMenuOpen(!showMenu) }} className='menu-btn'>

            <img src={showMenu ? closeIcon : menuIcon} alt="" className='w-full h-full object-cover' />
          </div>
          <Link className='dotted font-semibold text-xl uppercase' to="/">nothing(r)</Link>
          <div className='menu-btn'>
            <img src={storeIcon} alt="" className='w-full h-full object-cover' />
          </div>
        </div>

        <div className={`${showMenu ? "visible" : "hidden"} inner-menu  capitalize font-semibold`}>
          <div className='w-full  flex flex-col items-center py-[40px] md:py-3 uppercase text-4xl font-bold gap-7'>
            <Link className='dotted' to="/all-products/all" onClick={() => { changeMenu(false); changeMenuOpen(false) }}>shop all</Link>
            <Link className='dotted' to="/all-products/phones" onClick={() => { changeMenu(false); changeMenuOpen(false) }}>phones</Link>
            <Link className='dotted' to="/all-products/audio" onClick={() => { changeMenu(false); changeMenuOpen(false) }}>audio</Link>
            <Link className='dotted' to="/all-products/watches" onClick={() => { changeMenu(false); changeMenuOpen(false) }}>watches</Link>
            <Link className='dotted' to="/all-products/accesories" onClick={() => { changeMenu(false); changeMenuOpen(false) }}>accessories</Link>
            <Link className='dotted' to="/all-products/cmf" onClick={() => { changeMenu(false); changeMenuOpen(false) }}>cmf</Link>
          </div>

        </div>
      </div>


    </div>
  )
}

export default NavBar;