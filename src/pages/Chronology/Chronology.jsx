
import React, { useContext, useEffect, useState } from "react";
import './_Chronology.scss';
import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";
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
    <div className="hero">
      <Header
        showGoBackButton={false}
        showSearchBar={false}
        showGoHomeButton={true}
        t={props.t}
        fnSetLang={props.fnSetLang}
      ></Header>
        <pre className="sorter" onClick={() => {toggleSort()}}>
        <svg className={`sorter__svg ${!sort ? 'sorter__svg--active' : ''}`} width="59" height="137" viewBox="0 0 60 137" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43.5489 123.282C44.15 122.71 44.15 121.758 43.5489 121.166C43.4097 121.03 43.2439 120.922 43.0612 120.848C42.8784 120.775 42.6824 120.737 42.4845 120.737C42.2865 120.737 42.0905 120.775 41.9078 120.848C41.7251 120.922 41.5593 121.03 41.42 121.166L30.5165 131.898V96.482C30.5176 95.656 29.8503 95 29.0124 95C28.1734 95 27.4845 95.656 27.4845 96.482V131.898L16.6007 121.166C16.0007 120.593 15.0314 120.593 14.451 121.166C13.85 121.758 13.85 122.712 14.451 123.282L27.9355 136.556C28.0722 136.696 28.2371 136.808 28.4201 136.884C28.6031 136.96 28.8002 137 28.9995 137C29.1987 137 29.3959 136.96 29.5788 136.884C29.7618 136.808 29.9267 136.696 30.0634 136.556L43.5489 123.282Z" fill="white"/>
          <circle cx="30" cy="68.5" r="28" fill="#000" stroke="white" strokeWidth="3"/>
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
      <Footer
        t={props.t}
      ></Footer>
    </div>
  )
}