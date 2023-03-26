import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom'

const FooterItem = ({ title,items }) => {
  return (
    <div>
      <h4>{title}</h4>
 
      
        {items.map((item,id)=>(
            <Link key={id} className="item">{item}</Link>
          
        ))}

    

      
      
    </div>
  );
};

export default FooterItem;
