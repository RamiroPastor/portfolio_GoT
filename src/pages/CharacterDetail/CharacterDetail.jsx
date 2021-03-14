import React, {useState, useEffect} from "react";
import './_CharacterDetail.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {Header} from "../../core/Header/Header";
import {Link, useParams} from "react-router-dom";
import {API} from "../../shared/const/api.const";

export function CharacterDetail(props) {

    const {characterName} = useParams();

    const [character, setCharacter] = useState({});
    const [house, setHouse] = useState({});

    const getCharacter = () => {
        API.get('show/characters/' + characterName).then((res) => {
            setCharacter(res.data)
        });
    }

    const getHouse = () => {
        API.get('show/houses/' + character.house).then((res) => {
            setHouse(res.data)
        });
    }

    useEffect(getCharacter, [characterName]);
    useEffect(getHouse, [character.house]);


    return (
        <div className="hero__outer hero__outer--no-footer">
        <div className="hero">
            {character.id && house[0] && <div className={"c-char-detail"}>
                <div className={"c-char-detail__top-info"}>
                    <img className={"c-char-detail__image"} src={character.image ? character.image : "https://i.imgur.com/p8G3kF0.png"} alt={character.name}/>
                    <h1>{character.name}</h1>
                </div>
                <div className={"c-char-detail__bottom-info"}>
                    {character.house && <div className={"c-char-detail__info"}>
                        <h2>{props.t("house")}</h2>
                        <Link to={"/houses/"+character.house}><img className={"c-char-detail__house-image"} src={house[0].logoURL ? house[0].logoURL : "https://i.imgur.com/XzOn90r.png"} alt={""}/></Link>
                    </div>}

                    {character.allegiances && <div className={"c-char-detail__info"}>
                        <h2>{props.t("allegiances")}</h2>
                        <SimpleBar autoHide={false}>
                            {character.allegiances.map((allegiance, i) => <p key={i}>{allegiance}</p>)}
                        </SimpleBar>
                    </div>}

                    {character.appearances && <div className={"c-char-detail__info"}>
                        <h2>{props.t("appearances")}</h2>
                        <SimpleBar autoHide={false}>
                            {character.appearances.map((appearance, i) => <p key={i}>{appearance}</p>)}
                        </SimpleBar>
                    </div>}

                    {character.father && <div className={"c-char-detail__info"}>
                        <h2>{props.t("father")}</h2>
                        <p>{character.father}</p>
                    </div>}

                    {character.siblings && <div className={"c-char-detail__info"}>
                        <h2>{props.t("siblings")}</h2>
                        <SimpleBar autoHide={false}>
                            {character.siblings.map((sibling, i) => <p key={i}>{sibling}</p>)}
                        </SimpleBar>
                    </div>}

                    {character.titles && <div className={"c-char-detail__info"}>
                        <h2>{props.t("titles")}</h2>
                        <SimpleBar autoHide={false}>
                            {character.titles.map((title, i) => <p key={i}>{title}</p>)}
                        </SimpleBar>
                    </div>}
                </div>
            </div>}
        </div>
        </div>
    )
}