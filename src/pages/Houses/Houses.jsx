import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


import './_Houses.scss';
import {API} from '../../shared/const/api.const';
import {SearchContext} from "../../shared/contexts/SearchContext";



export function Houses(props) {

    const [houses, setHouses] = useState([]);

    const getHouses = () => {
        API.get('show/houses/').then((res) => {
            setHouses(res.data);
        });
    }

    useEffect(getHouses, []);

    const searchText = useContext(SearchContext);

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