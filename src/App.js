
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './App.css';
import { setCookieForever } from "./base/cookies";
import { Routes } from "./core/Routes/Routes";


function App() {

  const { t, i18n } = useTranslation(["translation"]);

  const changeLanguage = langCode => {
    setCookieForever("language-GoT-react", langCode);
    i18n.changeLanguage(langCode);
  }

  return (
    <Router>
      <div className="App">
        <Routes fnSetLang={changeLanguage} t={t}></Routes>
      </div>
    </Router>
  );
}

export default App;
