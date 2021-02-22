
import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import './_Footer.scss';


export function Footer(props) {

  const location = useLocation();

  let showFooter = false;

  if (!location.pathname.startsWith("/characters/") && !location.pathname.startsWith("/houses/")) {
    showFooter = true;
  }
  
  return(
    showFooter && <div className="Footer">
      <nav className="Footer__inner">
        <NavLink onClick={() => props.fnChangeSearchText("")} activeClassName="Footer__link--active" to="/characters" >
          <p className="Footer__linkText">
            {props.t("characters")}
          </p>
        </NavLink>
        <NavLink onClick={() => props.fnChangeSearchText("")} activeClassName="Footer__link--active" to="/houses" >
          <p className="Footer__linkText">
            {props.t("houses")}
          </p>
        </NavLink>
        <NavLink activeClassName="Footer__link--active" to="/chronology">
          <p className="Footer__linkText">
            {props.t("chronology")}
          </p>
        </NavLink>
      </nav>
    </div>
  )
}