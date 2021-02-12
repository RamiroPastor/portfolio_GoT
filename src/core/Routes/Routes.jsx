
import React from "react";
import { Route, Switch } from "react-router-dom";

import { CharacterDetail } from "../../pages/CharacterDetail/CharacterDetail";
import { Characters      } from "../../pages/Characters/Characters";
import { Chronology      } from "../../pages/Chronology/Chronology";
import { Home            } from "../../pages/Home/Home";
import { HouseDetail     } from "../../pages/HouseDetail/HouseDetail";
import { Houses          } from "../../pages/Houses/Houses";

export function Routes(props) {

  return(
    <Switch>

      <Route path="/characters/:characterName">
        <CharacterDetail
          t={props.t}
          fnSetLang={props.fnSetLang}
        ></CharacterDetail>
      </Route>

      <Route path="/characters">
        <Characters
          t={props.t}
          fnSetLang={props.fnSetLang}
        ></Characters>
      </Route>

      <Route path="/houses/:houseName">
        <HouseDetail
          t={props.t}
          fnSetLang={props.fnSetLang}
        ></HouseDetail>
      </Route>

      <Route path="/houses">
        <Houses
          t={props.t}
          fnSetLang={props.fnSetLang}
        ></Houses>
      </Route>

      <Route path="/chronology">
        <Chronology
          t={props.t}
          fnSetLang={props.fnSetLang}
        ></Chronology>
      </Route>

      <Route path="/" exact>
        <Home
          t={props.t}
          fnSetLang={props.fnSetLang}
        ></Home>
      </Route>

    </Switch>
  )
}