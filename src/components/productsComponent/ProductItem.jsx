import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product ,addItemsTocart}) => {
  const { productName, price, productImage,id } = product;
  return (
    <div className="product-item">
      <div style={{overflow:"hidden"}}>
        <img src={productImage} />
      </div>

      <div className="product-desc">
        <h3>{productName}</h3>
        <p className="before">250 DT</p>
        <p className="after"> {price} DT</p>
        <Link to='Buy'><button onClick={()=>addItemsTocart(id)}>Buy it now</button></Link>
      </div>
    </div>
  );
};

export default ProductItem;
