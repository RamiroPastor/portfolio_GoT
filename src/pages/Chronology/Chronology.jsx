
import React from "react";
import './_Chronology.scss';
import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";

export function Chronology(props) {
  
  return(
    <div className="hero">
      <Header
        showGoBackButton={false}
        showSearchBar={false}
        showGoHomeButton={true}
        t={props.t}
        fnSetLang={props.fnSetLang}
      ></Header>
      <h1>Chronology works</h1>
      <Footer
        t={props.t}
      ></Footer>
    </div>
  )
}