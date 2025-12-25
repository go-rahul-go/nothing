import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { allproductsData } from '../data';
import { useContext } from 'react';
import { MenuContext } from '../App';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import notfound from "../assets/image-not-found.png"
const AllProducts = () => {
  const menu = useContext(MenuContext)
  const { id } = useParams();
  const [products, changeProducts] = useState([]);
  const [pos, changePos] = useState(4)
  const index = useRef(0)


  let temp = []

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
    console.log(id + " use effect ")




  }, [id])





  // console.log(allproductsData[id])
  // changeProducts([...allproductsData.getAllproducts()])





  return (
    <div className={menu ? "h-[100vh] w-full overflow-hidden pt-[60px]" : "min-h-[100vh] w-full pt-[60px]"}>
      <p className='text-center text-4xl font-semibold capitalize py-[50px] dotted'>{id === "all" ? "all products" : id}</p>
      <div className='border border-black grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[75%] mx-auto'>
        {
          products.map((item, index) => {
            return (
              <div className='w-full h-[60vh] md:h-[400px] xl:h-[400px] bg-red-400 ' key={index}>
              <div className='w-full h-[80%] border overflow-hidden bg-green-500 grid place-items-center'>
                <LazyLoadImage src={item.url}  effect='blur' alt={"not found"} style={{height:"280px",objectFit:"contain",width:"300px", border:"2px solid red"}}/>
              </div>
              </div>
            )
          })
        }
      </div>

      {
        (index.current === allproductsData[id].length) ?
          <p>no more products</p>
          :
          <button onClick={() => { getData(); console.log("click") }} className='block w-full h-[100px] border border-black'>load more</button>
      }
    </div>
  )
}

export default AllProducts