import React, {useState, useEffect} from "react";
import './_Characters.scss';
import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";
import { useParams} from "react-router-dom";
import {API} from '../../shared/const/api.const';

export function Characters(props) {

  const {characterName} = useParams();

  const [character, setCharacter] = useState([]);
    
    const getCharacter = () => {
        API.get('show/characters/' + characterName).then((res) => {
            setCharacter(res.datacharacter);
        });
      }
        useEffect(getCharacter, [characterName]);

   return(
    <div className="hero">
      <Header
        showGoBackButton={false}
        showSearchBar={true}
        showGoHomeButton={true}
        t={props.t}
        fnSetLang={props.fnSetLang}
      />

    {character.id && <div className={"c-character"}>
      {props.character.map((character))}
     <div className={"c-character__top-info"}>
        <img className={"c-character__image"} src={character.image} alt={character.name}/>
        <h2>{character.name}</h2>
        </div>
    </div>}
  
    
      <Footer
        t={props.t}
      />
</div>
  )
}
  
