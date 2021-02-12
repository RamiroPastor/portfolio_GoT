
import React from "react";

import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";

export function Home(props) {
  
  return(
    <div className="Home">
      <Header
        showGoBackButton={false}
        showSearchBar={false}
        showGoHomeButton={false}
        t={props.t}
        fnSetLang={props.fnSetLang}
      ></Header>
      <h1>#</h1>  
      {/* esto funciona porque el caracter # es el logo de GoT en la fuente de GoT
      viene indicado aqui: https://www.fonts4free.net/game-of-thrones-font.html*/}
      <Footer
        t={props.t}
      ></Footer>
    </div>
  )
}