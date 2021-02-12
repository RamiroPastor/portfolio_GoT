
import React from "react";

import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";

export function Houses(props) {

  return(
    <div className="hero">
      <Header
        showGoBackButton={false}
        showSearchBar={true}
        showGoHomeButton={true}
      ></Header>
      <h1>Houses works</h1>
      <Footer></Footer>
    </div>
  )
}