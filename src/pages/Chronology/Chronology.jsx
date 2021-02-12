
import React from "react";

import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";

export function Chronology(props) {
  
  return(
    <div className="hero">
      <Header
        showGoBackButton={false}
        showSearchBar={false}
        showGoHomeButton={true}
      ></Header>
      <h1>Chronology works</h1>
      <Footer></Footer>
    </div>
  )
}