import React, {useEffect, useState} from "react";
import './_HouseDetail.scss';
import {Header} from "../../core/Header/Header";
import {NavLink, useParams} from "react-router-dom";
import SimpleBar from "simplebar-react";
import {API} from "../../shared/const/api.const";

export function HouseDetail(props) {

    const {houseName} = useParams();

    const [house, setHouse] = useState({});

    const getHouse = () => {
        API.get('show/houses/' + houseName).then((res) => {
            console.log(res.data[0]);
            setHouse(res.data[0])
        });
    }

    useEffect(getHouse, [houseName]);

    return (
        <div className="hero__outer hero__outer--no-footer">
        <div className="hero">
            {house._id && <div className={"c-house-detail"}>
                <div className={"c-house-detail__top-info"}>
                    <img className={"c-house-detail__image"} src={house.logoURL ? house.logoURL : "https://i.imgur.com/XzOn90r.png"} alt={house.name}/>
                    <h1>{house.name}</h1>
                </div>
                <div className={"c-house-detail__bottom-info"}>
                    {house.words && <div className={"c-house-detail__info"}>
                        <h2>{props.t("words")}</h2>
                        <p>{house.words}</p>
                    </div>}

                    {house.seat && <div className={"c-house-detail__info"}>
                        <h2>{props.t("seat")}</h2>
                        {house.seat.map((place, i) => <p key={i}>{place}</p>)}
                    </div>}

                    {house.region && <div className={"c-house-detail__info"}>
                        <h2>{props.t("region")}</h2>
                        {house.region.map((place, i) => <p key={i}>{place}</p>)}
                    </div>}

                    {house.allegiance && <div className={"c-house-detail__info"}>
                        <h2>{props.t("allegiances")}</h2>
                        {house.allegiance.map((allegiance, i) => <p key={i}>{allegiance}</p>)}
                    </div>}

                    {house.religion && <div className={"c-house-detail__info"}>
                        <h2>{props.t("religion")}</h2>
                        {house.religion.map((cult, i) => <p key={i}>{cult}</p>)}
                    </div>}

                    {house.created && <div className={"c-house-detail__info"}>
                        <h2>{props.t("created")}</h2>
                        <p>{house.createdAt.slice(0, 10)}</p>
                    </div>}
                </div>
            </div>}
        </div>
        </div>
    )
}