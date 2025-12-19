import React from 'react'
import { Link } from 'react-router'
import glyphimg from "../assets/home assests/glyph_ui.jpg"
const GlyphUI = () => {
  return (
    <div className='gly left-[40px] md:left-[25vw]'>
      <a className='block w-full h-full '>
          <img src={glyphimg} alt="" className='objecet-cover'/>
      </a>
    </div>
  )
}

export default GlyphUI