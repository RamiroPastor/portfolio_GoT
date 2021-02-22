
import React, {useContext} from "react";

import {SearchContext} from "../../../shared/contexts/SearchContext";
import './_SearchBar.scss';



export function SearchBar(props) {

  const searchText = useContext(SearchContext);

  
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
        onInput={e => {props.fnChangeSearchText(e.target.value)}}
        value={searchText}
      />
    </label>
  )
}
