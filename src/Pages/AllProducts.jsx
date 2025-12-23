import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { allproductsData } from '../data';
import { useContext } from 'react';
import { MenuContext } from '../App';
const AllProducts = () => {
  const menu=useContext(MenuContext)
  const { id } = useParams();
  const [products, changeProducts] = useState([]);
  const [pos, changePos] = useState(4)
  const index = useRef(0)


  let temp = []

  let getData = () => {
    // console.log(allproductsData[id].length)
    if (index.current < allproductsData[id].length) {
      index.current += 4
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
    <div className={menu?"h-[100vh] w-full overflow-hidden pt-[100px]":"min-h-[100vh] w-full pt-[100px]"}>{id}
      <div className='border border-black grid gap-2 grid-cols-3'>
        {
          products.map((item, index) => {
            return (
              <div className='w-[100px] h-[100px] bg-red-400 '>{index}</div>
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