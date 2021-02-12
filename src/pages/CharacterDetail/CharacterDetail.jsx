
import React from "react";

import { Header } from "../../core/Header/Header";

export function CharacterDetail(props) {
  
  return(
    <div className="hero">
      <Header
        showGoBackButton={true}
        showSearchBar={false}
        showGoHomeButton={true}
      ></Header>
      <h1>CharacterDetail works</h1>
    </div>
  )
}