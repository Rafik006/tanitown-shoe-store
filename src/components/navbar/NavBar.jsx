import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import "./navbar.css";
import SearchBar from "../ToggleSearch/Search Bar/SearchBar";
import { ShopContext } from "../../context/ProductContext";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const {removeAll}=useContext(ShopContext)



  return (
    <div className="container" >
      <nav className="navbar">
        <div className=" logo">
          <Link to="/" onClick={()=>removeAll()}>
            <img src={logo} alt="logo" data-testid="cart-icon"
            />
          </Link>
        </div>
        <div className="navigation">
        <FiSearch size={18} onClick={() => setShowSearch(!showSearch)} />
          <Link to='/cart'><FiShoppingCart size={18} /></Link>
            
          
          <p>0 DT</p>
        </div>
      </nav>
      <div>{showSearch && <SearchBar />}</div>
    </div>
  );
};

export default NavBar;
