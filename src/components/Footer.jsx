import React, { useState } from 'react'
import { Link } from 'react-router'
import { footerData } from '../data'
import downArrow from "../assets/footer assets/down-arrow-5-svgrepo-com.svg";
import closeicon from "../assets/footer assets/close-svgrepo-com.svg";
const languages = ['french', 'english', 'spanish', 'italiano', 'chinese', 'turkey', 'arabic', 'japan']
const Footer = () => {
  const [lang, setLang] = useState("english");
  const [langDialogue, langDialogueVisibility] = useState(false)
  return (
    <div className="w-full min-h-[100vh] bg-black footer">
      <div className={"w-full py-[12vh] border border-red-500 text-white flex flex-col justify-center items-center gap-4 text-3xl md:text-5xl"}>
        <Link className='dotted  uppercase font-semibold'>shop all</Link>
        <Link className='dotted  uppercase font-semibold'>phones</Link>
        <Link className='dotted  uppercase font-semibold'>watches</Link>
        <Link className='dotted  uppercase font-semibold'>accesories</Link>
        <Link className='dotted  uppercase font-semibold'>cmf</Link>
      </div>


      <div className='w-full py-[10vh] mt-[20px] border border-yellow-400 grid place-items-center'>
        <div className='w-[85%] md:w-[25%]  flex flex-col bg-zinc-800  rounded-xl'>
          {
            footerData.map((item, index) => {
              return (
                <Link className='w-full py-[12px] px-3  flex justify-between text-white items-center uppercase text-[0.7rem] hover:bg-zinc-900'>
                  <span >{item.title}</span>
                  <span className='w-[20px] h-[20px]  overflow-hidden'>
                    <img src={item.url} alt="" className='w-full h-full object-cover' />
                  </span>
                </Link>
              )
            })
          }


          <div className='w-full py-[12px] px-3  flex justify-between text-white items-center uppercase text-[0.7rem] hover:cursor-pointer hover:bg-zinc-900' onClick={() => langDialogueVisibility(!langDialogue)}>
            <span>lang: {lang}</span>
            <span className='w-[20px] h-[20px]  overflow-hidden'>
              <img src={downArrow} alt="" className='w-full h-full object-cover' />
            </span>
          </div>
        </div>
      </div>


      {
        langDialogue&&<LangBox langDialogueVisibility={langDialogueVisibility} langDialogue={langDialogue} setLang={setLang} />
      }
      <SocialLinks />

    </div>
  )
}

export default Footer


const LangBox = ({ langDialogueVisibility, langDialogue, setLang }) => {
  const handleClick = () => {

    langDialogueVisibility(false)
  }
  return (
    <div className={langDialogue ? "langbox" : "langbox-gone"} onClick={handleClick}>
      <div className=' w-[80%] h-[75%] md:w-[40%] bg-zinc-200 rounded-xl relative' onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClick} className='absolute top-3 right-3 w-[20px] h-[20px] border-black overflow-hidden md:w-[25px] md:h-[25px] lang-close'>
          <img src={closeicon} alt="" className='w-full h-full object-cover' />
        </button>
        <p className='lang-header text-[1.1rem] md:text-2xl'>select your language</p>
        <div className='w-full border border-red-500 grid grid-cols-2 md:grid-cols-3 gap-4 px-3 pt-3'>
          {
            languages.map((item, index) => {
              return (
                <p className='capitalize  cursor-pointer text-[1.1rem] md:text-xl' onClick={() => { setLang(item); langDialogueVisibility(false) }}>{item}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  )

}

const extraLink = [
  [
    { title: "playground", link: "/" },
    { title: "stores", link: "/" },
    { title: "contact", link: "/" },
    { title: "careers", link: "/" },
    { title: "legal", link: "/" }
  ],
  [
    { title: "community", link: "/" },
    { title: "instagram", link: "/" },
    { title: "x", link: "/" },
    { title: "youtube", link: "/" },
    { title: "tiktok", link: "/" }
  ]

]
const SocialLinks = () => {
  return (
    <div className='w-full py-7 border border-green-400 flex justify-evenly md:justify-between'>
      <div className='border border-white flex flex-col gap-[15px] px-2 md:flex-row md:gap-[35px] md:px-5 uppercase font-light text-[0.85rem]'>
        {
          extraLink[0].map((item, index) => {
            return (
              <Link className='text-white'>{item.title}</Link>
            )
          })
        }
      </div>
      <div className='border border-white flex flex-col gap-[15px] px-2 md:flex-row md:gap-[35px] sm:px-5 items-end uppercase font-light text-[0.85rem]'>
        {
          extraLink[1].map((item, index) => {
            return (
              <Link className='text-white'>{item.title}</Link>
            )
          })
        }
      </div>
    </div>
  )
}