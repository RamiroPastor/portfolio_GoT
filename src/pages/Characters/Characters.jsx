import React, {useState, useEffect} from "react";
import './_Characters.scss';
import {Footer} from "../../core/Footer/Footer";
import {Header} from "../../core/Header/Header";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {Link,useParams} from "react-router-dom";
import {API} from '../../shared/const/api.const';
import { CharacterDetail } from "../CharacterDetail/CharacterDetail";


export function Characters(props) {
    const {characterName} = useParams();
    const [character, setCharacter] = useState([]);
    const getCharacter = () => {
        API.get('show/characters/').then((res) => {
            setCharacter(res.data);
        });
    }
    useEffect(getCharacter, []);

    return (
        <div className="hero">
            <Header
                showGoBackButton={false}
                showSearchBar={true}
                showGoHomeButton={true}
                t={props.t}
                fnSetLang={props.fnSetLang}
            />
        
            <SimpleBar autoHide={false}>
            <div className="char">
            {character.map((char, i) => <div key={i} className={"char_img"}>
            <Link to={"/characters/:characterName"}><img className={"char_img"} src={char.image} alt={char.name}/>
                <figcaption><h4>{char.name}</h4></figcaption> </Link>
            </div>)}
            </div>
            </SimpleBar>
          
            <Footer
                t={props.t}
            />
        </div>
    )
}
  

