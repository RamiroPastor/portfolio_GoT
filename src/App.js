import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import './App.css';
import {setCookieForever} from "./base/cookies";
import {MusicGoT} from "./core/MusicGoT/MusicGoT";
import {Routes} from "./core/Routes/Routes";
import {Header} from "./core/Header/Header";
import {Footer} from "./core/Footer/Footer";


function App() {

    const {t, i18n} = useTranslation(["translation"]);

    const changeLanguage = langCode => {
        setCookieForever("language-GoT-react", langCode);
        i18n.changeLanguage(langCode);
    }

    return (
        <Router>
            <div className="App">
                <MusicGoT/>
                <Header fnSetLang={changeLanguage} t={t}/>
                <Routes t={t}/>
                <Footer t={t}/>
            </div>
        </Router>
    );
}

export default App;
