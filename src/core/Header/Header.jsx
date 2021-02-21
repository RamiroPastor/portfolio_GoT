
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import './_Header.scss';
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { SearchBar }  from "./SearchBar/SearchBar";


export function Header(props) {

  const location = useLocation();
  let showGoBackButton;
  let showSearchBar;
  let showGoHomeButton;

  let goBackRoute = "/";

  if (location.pathname.startsWith("/houses")) {
    goBackRoute = "/houses"
  }
  if (location.pathname.startsWith("/characters")) {
    goBackRoute = "/characters"
  }

  if (location.pathname.startsWith("/characters/") || location.pathname.startsWith("/houses/")) {
    showGoBackButton = true;
    showSearchBar = false;
    showGoHomeButton = true;
  } else if (location.pathname.startsWith("/characters") || location.pathname.startsWith("/houses")) {
    showGoBackButton = false;
    showSearchBar = true;
    showGoHomeButton = true;
  } else if (location.pathname.startsWith("/chronology")) {
    showGoBackButton = false;
    showSearchBar = false;
    showGoHomeButton = true;
  } else {
    showGoBackButton = false;
    showSearchBar = false;
    showGoHomeButton = false;
  }

  return(
    <div className="Header">
      <div className="Header__inner">

        {showGoBackButton &&
        <NavLink className="Header__goBack" to={goBackRoute}>
          <img alt="go back" src="/assets/images/arrow-left.svg"/>
          <span>{props.t("goBack")}</span>
        </NavLink>}

        {showSearchBar &&
        <SearchBar
          t={props.t}
        ></SearchBar>}

        {!showGoBackButton && !showSearchBar &&
        <div> </div>}  {/* esto es un pequeño hack para que funcione el justify-content: space-between*/}

        <HeaderMenu 
          showGoHomeButton={showGoHomeButton}
          fnSetLang={props.fnSetLang}
        ></HeaderMenu>

      </div>
    </div>
  )
}