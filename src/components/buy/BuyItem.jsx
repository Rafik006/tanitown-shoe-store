import React from "react";
import "./Buy.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ShopContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const BuyItem = ({ product, addItemsTocart, removeItem, cartItems,handleChange,handleSubmit,checkout }) => {
  const { id, price, productName, productImage } = product;
  const navigate=useNavigate()
  return (
    <div className="item-container">
      <img src={productImage} alt={productName} />
      <div className="product-desc">
        <div className="product-title">{productName}</div>
        <div className="price">
          <p className="after">{price}DT</p> <p className="before">280DT</p>
        </div>
        <div className="size">
          <div className="title">Size</div>
          <div className="product-size">
            <button onClick={(e)=>handleSubmit(e)} value="40">40</button>
            <button onClick={(e)=>handleSubmit(e)} value="41">41</button>
            <button onClick={(e)=>handleSubmit(e)} value="42">42</button>
            <button onClick={(e)=>handleSubmit(e)} value="43">43</button>
            <button onClick={(e)=>handleSubmit(e)} value="44">44</button>
          </div>
        </div>
        <div className="customer-information">
          <h4>Customer Information</h4>
          <form >
            <div>
              <input placeholder="Nom" name="lastName" onChange={(e)=>handleChange(e)}/>
              <input placeholder="Prenom" name="firstName" onChange={(e)=>handleChange(e)}/>
            </div>

            <div>
              <input placeholder="Telephone " name="phone"onChange={(e)=>handleChange(e)} />
              <input placeholder="address" name="address"onChange={(e)=>handleChange(e)} />
            </div>
          </form>
        </div>
        <div className="checkout">
          <div className="handle-count">
            <button onClick={() => removeItem(id)}>-</button>
            <p>{cartItems[id]}</p>
            <button onClick={() => addItemsTocart(id)}>+</button>
          </div>
          <button type="submit" className="checkout-btn" onClick={()=>{
            checkout()
            navigate('/cart')
          }}>Ajouter Au panier</button>
        </div>
      </div>
    </div>
  );
};

export default BuyItem;
