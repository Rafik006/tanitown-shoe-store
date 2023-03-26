import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import "./product.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PRODUCTS } from "../../Jordan products/produts";
import { ShopContext } from "../../context/ProductContext";

const Products = () => {
  const {addItemsTocart}=useContext(ShopContext)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,

      slidesToScroll: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToScroll: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,

      slidesToScroll: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,

      slidesToScroll: 4,
    },
  };
  return (
    <div className="products-container">
      <div className="product-info">
        <h2>air jordan</h2>
        <p>Fly high with low price</p>
      </div>
      <div>
      <Carousel responsive={responsive} infinite={true} arrows={true}>
        {PRODUCTS.map((product) => (
          <ProductItem addItemsTocart={addItemsTocart} key={product.id} product={product} />
        ))}
      </Carousel>
      </div>
    </div>

  );
};

export default Products;
