import React from "react";


import "./card.styles.css";
export const Card = (props) => (
   <div className="card">
      <img src={`https://robohash.org/${props.monster.id}?set=set1&size=150x150`} alt="monster" />
      <h1>
         {props.monster.name}
      </h1>
      <h3>
         {props.monster.email}
      </h3>
   </div>
);