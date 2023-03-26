import React, { createContext, useState } from "react";

import { PRODUCTS } from "../Jordan products/produts";
export const ShopContext = createContext();
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    const product = PRODUCTS[i];
    cart[product.id] = 0;
  }
  return cart;
};

const ShopContextPovider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [info, setInfo] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    productName: "",
    size: "",
    id: "",
  });
  const getProductName = () => {
    const product = PRODUCTS.find((product) => cartItems[product.id] !== 0);
    setCustomerInfo((prev) => ({
      ...prev,
      productName: product.productName,
      id: product.id,
    }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    getProductName();
    setCustomerInfo((prev) => ({
      ...prev,
      size: event.target.value,
    }));
    event.target.classList.toggle("clicked");
  };
  const checkout = () => {
    setInfo([customerInfo]);
  };

  const addItemsTocart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const removeItem = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const removeAll = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    addItemsTocart,
    removeItem,
    cartItems,
    removeAll,
    handleChange,
    handleSubmit,
    checkout,
    info,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextPovider;
