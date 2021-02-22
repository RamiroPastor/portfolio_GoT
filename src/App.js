import React, {useState} from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import './App.css';
import {setCookieForever} from "./base/cookies";
import {MusicGoT} from "./core/MusicGoT/MusicGoT";
import {Routes} from "./core/Routes/Routes";
import {Header} from "./core/Header/Header";
import {Footer} from "./core/Footer/Footer";

import { SearchContext } from "./shared/contexts/SearchContext";


function App() {

    const {t, i18n} = useTranslation(["translation"]);

    const changeLanguage = langCode => {
        setCookieForever("language-GoT-react", langCode);
        i18n.changeLanguage(langCode);
    }

    const [searchText, setSearchText] = useState("");

    const changeSearchText = newText => {
        const txt = newText.toLowerCase()
        setSearchText(txt)
    }

    return (
        <Router>
            <SearchContext.Provider value={searchText}>
                <div className="App">
                    <MusicGoT/>
                    <Header fnSetLang={changeLanguage} t={t} fnChangeSearchText={changeSearchText}/>
                    <Routes t={t}/>
                    <Footer t={t} fnChangeSearchText={changeSearchText}/>
                </div>
            </SearchContext.Provider>
        </Router>
    );
}

export default App;
