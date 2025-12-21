import React from 'react'
import { Link } from 'react-router';

const HomeCard = ({ background,info,iconURL,title,subtitle }) => {
    return (
        <div className='home-card'>

            <HomecardBack url={background} />
            <HomeCardProduct id={info.id} iconURL={iconURL} title={title} subtitle={subtitle} />
        </div>
    )
}

export default HomeCard;


const HomecardBack = ({ url }) => {
    return (
        <div className='home-card-bg'>
            <img src={url} alt="" className='w-full h-full object-cover' />
        </div>
    )
}

const HomeCardProduct = ({id,iconURL,title,subtitle}) => {
    return (
        <div className='homecard-prod'>
            <Link className={`w-[90%] h-[155px] md:w-[38vw] md:h-[30vh] my-[10px] mx-auto inner-homecard-product ${id%2===0?"glass-white":"glass-black"}`} to="/" target='_blank'>
               <span className={`w-[60%] h-full  px-4 py-5 flex flex-col justify-between ${id%2==0?"text-black":"text-white"}`}>
                     <p className='text-2xl '>{subtitle}</p>   
                     <p className='dotted text-xl font-bold'>{title}</p>
               </span>
               <span className='w-[40%] md:w-[200px] h-full  overflow-hidden'>
                    <img src={iconURL} alt="" className='w-full h-full object-contain'/>
               </span>
            </Link>
        </div>
    )
}