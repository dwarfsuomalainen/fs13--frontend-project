import React from 'react'
import { useNavigate, useParams } from 'react-router'

const Product = () => {
const {id} = useParams()
const navigate = useNavigate()

  return (
    <div>
      Product id: {id}
    <button onClick={()=> navigate(-1)}>Back to store</button>

    </div>
  )
}

export default Product
