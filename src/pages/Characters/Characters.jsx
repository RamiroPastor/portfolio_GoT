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
        <div className="hero hero--char">
            <SimpleBar autoHide={false}>
            <div className="hero__container">
                {character.map((char, i) => 
                <figure key={i} className={"hero__card"}>
                    <Link to={`/characters/${char.name}`}>
                        <img className="hero__card__img" src={char.image ? char.image : "https://i.imgur.com/p8G3kF0.png"} alt={char.name}/>
                        <figcaption className="hero__card__name">{char.name}</figcaption>
                    </Link>
                </figure>)}
            </div>
            </SimpleBar>
        </div>
    )
}
  

