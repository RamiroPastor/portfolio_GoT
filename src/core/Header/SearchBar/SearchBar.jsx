
import React from "react";

import './_SearchBar.scss';




export function SearchBar(props) {

  
  
  return(
    <label className="SearchBar">
      <img 
        alt="search" 
        src="/assets/images/search.svg"
        className="SearchBar__icon"
      />
      <input 
        className="SeachBar__input"
        type="seach"
        placeholder={props.t("search") + "..."}
             />
    </label>
  )
}
