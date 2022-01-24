import React from "react"


export const SearchBox = (props) => {

   return (
      <input
         className="searchForm"
         type="search"
         placeholder={props.placeholder}
         onChange={props.handleChange}
      />
   );


}