
import React from "react";
import { NavLink } from "react-router-dom";


export function Footer(props) {
  
  return(
    <div className="Footer">
      <nav className="Footer__inner">
        <NavLink activeClassName="Footer__link--active" to="/characters">
          <p className="Footer__linkText">Personajes</p>
        </NavLink>
        <NavLink activeClassName="Footer__link--active" to="/houses">
          <p className="Footer__linkText">Casas</p>
        </NavLink>
        <NavLink activeClassName="Footer__link--active" to="/chronology">
          <p className="Footer__linkText">Cronologia</p>
        </NavLink>
      </nav>
    </div>
  )
}