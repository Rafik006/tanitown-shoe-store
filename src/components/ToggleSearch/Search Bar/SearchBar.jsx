import React from 'react'
import { FiSearch } from "react-icons/fi";
import './Searchbar.css'

const Bar = () => {
  return (
    <div className='searchbar-container'>
      <div >
          {/* <SelectCollection/> */}
          <select value="All Collection">
            <option value="all collection">All Collection</option>
            <option value="option1">Retro</option>
            <option value="option2">AF1</option>
            <option value="option3">LV</option>
            <option value="option3">New Balance 550</option>
            <option value="option3">Dunk</option>
            <option value="option3">Uptempo</option>
            <option value="option3">RARE</option>
            <option value="option3">Women</option>
            <option value="option3">Men</option>
            <option value="option3">AIR JORDAN</option>
          </select>

      </div>
      <div className='searchbar'>
          <input type="text" placeholder='Search product'/>
          <FiSearch className='fiSearch'/>
      </div>


      
    </div>
  )
}

export default Bar;
