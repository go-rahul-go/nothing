import React from 'react'
import { useParams } from 'react-router'

const AllProducts = () => {
    const {id}=useParams();

  return (
    <div>{id}</div>
  )
}

export default AllProducts