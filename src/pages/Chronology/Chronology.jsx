
import React, { useContext, useEffect, useState } from "react";
import './_Chronology.scss';
import {API} from "../../shared/const/api.const";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { LoaderContext } from "../../core/Loader/LoaderContext/LoaderContext";

export function Chronology(props) {
  
  const [ characters, setCharacters ] = useState(null);
  const [ sort, setSort ] = useState(true);

  const { setIsLoading } = useContext(LoaderContext);

  const getCharacters = () => {
    setIsLoading(true);
    API.get('show/characters')
    .then(res => {
      const allCharacters = res.data;
      let characters = [];
      // Iterate result and check if age property exists
      for (let character in allCharacters) {
        character = allCharacters[character];
        if (character.age) {
          if (character.age.hasOwnProperty('age')) {
            // Exclude character --> API age typo
            if (character.age.age !== 2016) {
              characters.push(character);
            }
          }
        }
      }
      setCharacters(characters);
      setIsLoading(false);
    })
    .catch(error => console.log(error));
  }
  
  const sortByAge = (propList) => {
    // Check if api result exist to avoid "element is not iterable"
    if (propList) {
      // Clone characters state to avoid mutation
      let list = [...propList];
      list.sort(( a, b ) => sort ? a.age.age - b.age.age : b.age.age - a.age.age);
      return list;
    }
  }

  const sortedCharacters = sortByAge(characters);

  const toggleSort = () => {
    setSort(!sort);
  }


  useEffect(getCharacters, []);

  return(
    <div className="hero__outer">
    <div className="hero">
        <pre className="sorter" onClick={() => {toggleSort()}}>
        <svg className={`sorter__svg ${!sort ? 'sorter__svg--active' : ''}`} width="60" height="140" viewBox="0 0 60 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="white" stroke-width="4" stroke-linecap="round"
            d="M 30 138 L 30 100 M 30 138 L 15 120 M 30 138 L 45 120" />
          <circle cx="30" cy="70" r="28.5" stroke="white" stroke-width="3" fill="black" />
        </svg>
        <pre className="sorter__num">{characters && sortedCharacters[0].age.age}</pre>

        </pre>
      <section className="section">
        <SimpleBar autoHide={false}>
          <div className="timeline">
            {characters && sortedCharacters.map(( character, i ) => 
            <div className="timeline__item" key={i}>
              <figure className="figure">
                <figcaption>
                  <p className="figure__age">{character.age.age}</p>
                  <p className="figure__name">{character.age.name}</p>
                </figcaption>
                <img className="figure__image" src={character.image} alt={character.age.name} />
              </figure>
            </div>)}
          </div>
          
        </SimpleBar>
      </section>
    </div>
    </div>
  )
}