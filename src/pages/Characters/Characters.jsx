import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import './_Characters.scss';
import {API} from '../../shared/const/api.const';
import {SearchContext} from "../../shared/contexts/SearchContext";


export function Characters(props) {
    const [characters, setCharacters] = useState([]);
    const getCharacters = () => {
        API.get('show/characters/').then((res) => {
            setCharacters(res.data);
        });
    }
    useEffect(getCharacters, []);

    const searchText = useContext(SearchContext);

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
  

