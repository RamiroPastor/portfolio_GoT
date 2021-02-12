
import React from "react";

import { Header } from "../../core/Header/Header";

export function HouseDetail(props) {
  
  return(
    <div className="hero">
      <Header
        showGoBackButton={true}
        showSearchBar={false}
        showGoHomeButton={true}
        t={props.t}
        fnSetLang={props.fnSetLang}
      ></Header>
      <h1>HouseDetails works</h1>
    </div>
  )
}