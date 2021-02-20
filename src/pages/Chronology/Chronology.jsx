
import React, { useEffect, useState } from "react";
import './_Chronology.scss';
import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";
import {API} from "../../shared/const/api.const";

export function Chronology(props) {
  
  const [ characters, setCharacters ] = useState([]);
  const [ sort, setSort ] = useState(false);

  const getCharacters = () => {
    API.get('show/characters')
    .then(res => {
      const allCharacters = res.data;
      let characters = [];
      for (let character in allCharacters) {
        character = allCharacters[character];
        if (character.age) {
          if (character.age.hasOwnProperty('age')) {
            characters.push(character);
          }
        }
      }
      setCharacters(characters);
    })
  }

  const sortByAge = (characters) => {
    characters.sort(( a, b ) => {

    })
  }

  useEffect(getCharacters, []);

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