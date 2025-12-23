import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { allproductsData } from '../data';

const AllProducts = () => {
  const { id } = useParams();
  const [products, changeProducts] = useState([]);
  const [pos, changePos] = useState(4)
  const index = useRef(0)

  let temp = []

  let getData = () => {
    if (id !== "all") {
      temp = pagination(allproductsData[id]);

      changeProducts([...temp])
    }

    else {
      let p = [...allproductsData['phones'], ...allproductsData['cmf'], ...allproductsData['watches'], ...allproductsData['audio'], ...allproductsData['accesories']]
      temp = pagination(p);
      console.log(p)
      changeProducts([...temp])

      // console.log(products)
    }
  }

  let pagination = (data) => {
    let p;


    if (index.current <= data.length) {
      index.current += 4
      p = data.slice(0, index.current);
      console.log(index.current + p + " if")



    }

    else {
      p = data.slice(0, data.length);
       index.current=0
      console.log(p + " else ",index.current)
      


    }
    return p;


  }


  useEffect(() => {
    getData();
    index.current=0
    console.log("use effect ",index.current)
    



  }, [id])





  // console.log(allproductsData[id])
  // changeProducts([...allproductsData.getAllproducts()])





  return (
    <div>{id}
      <div className='border border-black grid gap-2 grid-cols-3'>
        {
          products.map((item, index) => {
            return (
              <div className='bg-blue-200 w-[100px] h-[100px]'>
                {index}
              </div>
            )
          })
        }
      </div>
      <button onClick={() => getData()}  className='block w-full h-[100px] border border-black'>load more</button>
    </div>
  )
}

export default AllProducts