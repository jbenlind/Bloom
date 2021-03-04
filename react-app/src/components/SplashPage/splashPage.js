import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import './splashPage.css';

const SplashPage = ({setBloomState}) => {

    const history = useHistory();

    const getStarted = (e) => {
        e.preventDefault();
        history.push('/userHub');
    }

    useEffect(() => {
        const url = window.location.href;

        if(!url.includes("userHub")) {
           setBloomState("")
        }
    })

    return (
        <>
            <img id="backgroundImage" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/splashPage-backgroundImage.png" alt=""></img>
            <div id="page-container">
                <h1 id="slogan-header">Beautiful sites made easy</h1>
                <button onClick={(e) => getStarted(e)} className="btn from-top">Get Started</button>
            </div>

        </>
    )
}

export default SplashPage;
