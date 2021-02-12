
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
        ></CharacterDetail>
      </Route>

      <Route path="/characters">
        <Characters
        ></Characters>
      </Route>

      <Route path="/houses/:houseName">
        <HouseDetail
        ></HouseDetail>
      </Route>

      <Route path="/houses">
        <Houses
        ></Houses>
      </Route>

      <Route path="/chronology">
        <Chronology
        ></Chronology>
      </Route>

      <Route path="/" exact>
        <Home
        ></Home>
      </Route>

    </Switch>
  )
}