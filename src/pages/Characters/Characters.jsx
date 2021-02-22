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
        <div className="hero">
            <SimpleBar autoHide={false}>
                <div className="char">
                    {characters
                        .filter(char => char.name.toLowerCase().includes(searchText))
                        .map((char, i) => 
                    <div key={i} className={"char_img"}>
                        <Link to={`/characters/${char.name}`}>
                            <img className={"char_img"} src={char.image} alt={char.name}/>
                            <figcaption><h4>{char.name}</h4></figcaption>
                        </Link>
                    </div>)}
                </div>
            </SimpleBar>
        </div>
    )
}
  

