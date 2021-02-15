
import React from "react";
import './_Characters.scss';
import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";

export function Characters(props) {
  
  return(
    <div className="hero">
      <Header
        showGoBackButton={false}
        showSearchBar={true}
        showGoHomeButton={true}
        t={props.t}
        fnSetLang={props.fnSetLang}
      ></Header>
      <h1>Characters works</h1>
      <Footer
        t={props.t}
      ></Footer>
    </div>
  )
}