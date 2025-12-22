import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { allproductsData } from '../data';

const AllProducts = () => {
  const { id } = useParams();
  const [products, changeProducts] = useState([])


  useEffect(() => {
    if (id !== "all") {
      console.log(changeProducts([...allproductsData[id]]))
    }
    else {
      let p=[...allproductsData['phones'],...allproductsData['cmf'],...allproductsData['watches'],...allproductsData['audio'],...allproductsData['accesories']]
      changeProducts([...p])
      console.log(products)
    }
  },[id])





  // console.log(allproductsData[id])
  // changeProducts([...allproductsData.getAllproducts()])





  return (
    <div>{id}</div>
  )
}

export default AllProducts