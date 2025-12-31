import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { allproductsData } from '../data';
import { useContext } from 'react';
import { MenuContext } from '../App';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import notfound from "../assets/image-not-found.png"
import Footer from '../components/Footer';




const AllProducts = () => {
  const menu = useContext(MenuContext)
  const { id } = useParams();
  const [products, changeProducts] = useState([]);

  const index = useRef(0)





  let getData = () => {
    // console.log(allproductsData[id].length)
    if (index.current < allproductsData[id].length) {
      index.current += 6
      console.log(" if ", index.current)
      changeProducts([...allproductsData[id].slice(0, index.current)])



    }
    else {
      index.current = allproductsData[id].length;
      console.log(" else ", index.current)
      changeProducts([...allproductsData[id].slice(0, index.current)])
      // console.log( " else ", index.current)
    }
  }


  // useEffect(() => {

  // }, [])

  useEffect(() => {
    index.current = 0
    getData();
    // console.log(id + " use effect ")

    document.title = `${id.toUpperCase()} | Nothing IN`

    window.scrollTo(0, 0)




  }, [id])






  // console.log(allproductsData[id])
  // changeProducts([...allproductsData.getAllproducts()])





  return (
    <div className={menu ? "h-[100vh] w-full overflow-hidden pt-[60px] bg-slate-100" : " w-full pt-[60px] all-prod-container bg-slate-100"}>

      <p className='text-center text-4xl font-semibold capitalize py-[50px] dotted'>{id === "all" ? "all products" : id}</p>
      <div className={id==="all"?"border border-black grid gap-3 grid-cols-1 md:grid-cols-3 xl:grid-cols-5 w-[90%]  mx-auto":"border border-black grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  w-[90%]  xl:w-[80%] mx-auto"}>
        {
          products.map((item, index) => {
            return (
              <div className='w-full    flex flex-col relative gap-2 ' key={index} >
                <div className='w-full  border overflow-hidden  grid place-items-center other-prod-box'>
                  <LazyLoadImage src={item.url} effect='blur' alt={"not found"} style={{ height: "300px", objectFit: "contain", width: "300px", border: "2px solid red" }} wrapperProps={{

                    style: { transitionDelay: "0.3s" },
                  }} />
                </div>
                <span className='bg-yellow-300 text-center capitalize font-medium text-[0.95rem]'>{item.title}</span>
              </div>
            )
          })
        }
      </div>
      <div className='w-full border border-red-500 flex justify-center items-center py-5 my-5'>
        {
          (index.current >= allproductsData[id].length) ?
            <p className='uppercase font-semibold'>no more products</p>
            :
            <button onClick={() => { getData(); }} className='block py-3 px-4 border border-black w-[90%] md:w-[40%] bg-black text-slate-200 uppercase font-semibold rounded' id="load-more">load more</button>
        }
      </div>

    </div>
  )
}

export default AllProducts