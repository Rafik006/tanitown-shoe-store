import React, { useContext } from 'react'
import { PRODUCTS } from '../../Jordan products/produts'
import { ShopContext } from '../../context/ProductContext'
import BuyItem from './BuyItem'

const Buy = () => {
    const {cartItems,addItemsTocart,removeItem,handleChange,handleSubmit,checkout}=useContext(ShopContext)
    
//     const getProduct=()=>{
//         for(let item in cartItems){
//             if(cartItems[item]!==0){
//                 return PRODUCTS[item]
//             }
//         }
//     }
//    const product= getProduct()
//    console.log(product)

  return (
    <div>
      {PRODUCTS.map((product,id)=>{
        if(cartItems[product.id]!==0){
            return <BuyItem key={id} product={product} checkout={checkout} handleSubmit={handleSubmit} handleChange={handleChange} addItemsTocart={addItemsTocart} removeItem={removeItem} cartItems={cartItems}/>
        }
      })}
    </div>
  )
}

export default Buy
