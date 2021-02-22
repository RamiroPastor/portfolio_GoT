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
    <div className="hero">
      <SimpleBar autoHide={false}>
        <div className="home">
          {houses
              .filter(hom => hom.name.toLowerCase().includes(searchText))
              .map((hom, i) => 
          <div key={i} className={"home_text"}>
            <Link to={`/houses/${hom.name}`}>
              <img className={"image"} src={hom.logoURL} alt={hom.name}/>
              <h2 className={"home_text"}>{hom.name}</h2>
            </Link>
          </div>)}
        </div>
      </SimpleBar>
    </div>
  )
}