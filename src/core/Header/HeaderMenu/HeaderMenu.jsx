
import React from "react";
import { NavLink } from "react-router-dom";


export function HeaderMenu(props) {
  
  return(
    <div className="HeaderMenu">
      {props.showGoHomeButton && 
      <NavLink to="/" className="HeaderMenu__button">
        <img alt="go home" src="/assets/images/home.svg"/>
      </NavLink>}
      <button className="HeaderMenu__langButton">
        <img alt="spanish" src="/assets/flags/spain.svg"/>
      </button>
      <button className="HeaderMenu__langButton">
        <img alt="english" src="/assets/flags/united-kingdom.svg"/>
      </button>
    </div>
  )
}