import React, {useState, useEffect} from "react";
import './_Houses.scss';
import { Footer } from "../../core/Footer/Footer";
import { Header } from "../../core/Header/Header";
import {useParams} from "react-router-dom";
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
    <div className="hero">
      <Header
        showGoBackButton={false}
        showSearchBar={true}
        showGoHomeButton={true}
        t={props.t}
        fnSetLang={props.fnSetLang}
      />
      
      {house.map((house, i) => <div key={i} className={"c-character__top-info"}>
                <img className={"c-character__image"} src={house.image} alt={house.name}/>
                <h2>{house.name}</h2>
            </div>)}

      <Footer
        t={props.t}
      ></Footer>
    </div>
  )
}