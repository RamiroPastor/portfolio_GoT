
import React from "react";
import { NavLink } from "react-router-dom";


export function Footer(props) {
  
  return(
    <div className="Footer">
      <nav className="Footer__inner">
        <NavLink activeClassName="Footer__link--active" to="/characters">
          <p className="Footer__linkText">
            {props.t("characters")}
          </p>
        </NavLink>
        <NavLink activeClassName="Footer__link--active" to="/houses">
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