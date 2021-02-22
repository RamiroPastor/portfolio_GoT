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
    <div className="hero">
      <Header
        showGoBackButton={false}
        showSearchBar={true}
        showGoHomeButton={true}
        t={props.t}
        fnSetLang={props.fnSetLang}
      />
      <SimpleBar autoHide={false}>
      <div className="home">
      {house.map((hom, i) => <div key={i} className={"home_text"}>
      <Link to={"/houses/:houseName"}><img className={"image"} src={hom.logoURL} alt={hom.name}/>
                <h2 className="home_text">{hom.name}</h2></Link>
            </div>)}
            </div>
          
            </SimpleBar>
      <Footer
        t={props.t}
      ></Footer>
    </div>
  )
}