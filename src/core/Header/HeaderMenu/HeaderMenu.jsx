
import React from "react";
import { NavLink } from "react-router-dom";

import es from "../../../assets/flags/spain.svg";
import en from "../../../assets/flags/united-kingdom.svg";

export function HeaderMenu(props) {
  
  return(
    <div className="HeaderMenu">
      {props.showGoHomeButton && 
      <NavLink to="/" className="HeaderMenu__button">
        <img alt="go home" src="/assets/images/home.svg"/>
      </NavLink>}
      <button 
        className="HeaderMenu__langButton"
        onClick={() => props.fnSetLang("es")}
        ><img alt="spanish" src={es}/>
      </button>
      <button 
        className="HeaderMenu__langButton"
        onClick={() => props.fnSetLang("en")}
        ><img alt="english" src={en}/>
      </button>
    </div>
  )
}