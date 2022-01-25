
import React from "react";

import "./menuItem.styles.scss";


const MenuItem = ({ title, subtitle, imgUrl, imgSize }) => {
   return (

      <div className={`menu-item ${imgSize}`} >
         <div className="menu-item-inner" style={{ background: `url(${imgUrl})` }}>
         </div>
            <div className="content">
               <h2 className="title">{title}</h2>
               <span className="subtitle">{subtitle}</span>
            </div>
      </div>

   )
}


export default MenuItem;