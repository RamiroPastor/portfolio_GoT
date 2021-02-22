import React, { useContext } from 'react'
import { LoaderContext } from './LoaderContext/LoaderContext';
import './Loader.scss'

function Loader() {

    const { isLoading } = useContext(LoaderContext);

    return (
        isLoading && <div className="c-loader">
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        </div>
    )
}

export default Loader
