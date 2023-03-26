import React, { useContext } from 'react'
import { ShopContext } from '../context/ProductContext'

const Cart = () => {
  const {info}=useContext(ShopContext)

  console.log(info)
  
  return (
    <div >
        {JSON.stringify(info)}
    </div>
  )
}

export default Cart
