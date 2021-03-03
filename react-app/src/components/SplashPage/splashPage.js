import React from "react";


import './splashPage.css';

const SplashPage = () => {

    return (
        <>
            <img id="backgroundImage" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/splashPage-backgroundImage.png" alt=""></img>
            <div id="page-container">
                <h1 id="slogan-header">Simple designs to power your ideas</h1>
                <button className="btn from-top">Get Started</button>
            </div>

        </>
    )
}

export default SplashPage;
