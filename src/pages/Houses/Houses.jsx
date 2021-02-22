import React, {useState, useEffect} from "react";
import './_Houses.scss';
import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";
import {Link, useParams} from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {API} from '../../shared/const/api.const';

export function Houses(props) {

  const {houseName} = useParams();
    const [house, setHouse] = useState([]);

    const getHouse = () => {
        API.get('show/houses/').then((res) => {
            setHouse(res.data);
        });
    }

    useEffect(getHouse, []);

  return(
    <div className="hero hero--house">
      <SimpleBar autoHide={false}>
      <div className="hero__container hero__container--houses">
      {house.map((hom, i) => <div key={i} className="hero__card">
      <Link to={`/houses/${hom.name}`}>
                <figure className="hero__figure">
                  <img className="hero__figure__image" src={hom.logoURL ? hom.logoURL : "https://i.imgur.com/XzOn90r.png"} alt={hom.name}/>
                  <figcaption className="hero__figure__text">{hom.name}</figcaption>
                </figure></Link>
            </div>)}
            </div>

            </SimpleBar>
    </div>
  )
}