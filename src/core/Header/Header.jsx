
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import './_Header.scss';
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { SearchBar }  from "./SearchBar/SearchBar";


export function Header(props) {

  const location = useLocation();

  let goBackRoute = "/";

  if (location.pathname.startsWith("/houses")) {
    goBackRoute = "/houses"
  };
  if (location.pathname.startsWith("/characters")) {
    goBackRoute = "/characters"
  }
  

  return(
    <div className="Header">
      <div className="Header__inner">

        {props.showGoBackButton &&
        <NavLink className="Header__goBack" to={goBackRoute}>
          <img alt="go back" src="/assets/images/arrow-left.svg"/>
          <span>{props.t("goBack")}</span>
        </NavLink>}

        {props.showSearchBar &&
        <SearchBar
          t={props.t}
        ></SearchBar>}

        {!props.showGoBackButton && !props.showSearchBar &&
        <div> </div>}  {/* esto es un pequeño hack para que funcione el justify-content: space-between*/}

        <HeaderMenu 
          showGoHomeButton={props.showGoHomeButton}
          fnSetLang={props.fnSetLang}
        ></HeaderMenu>

      </div>
    </div>
  )
}