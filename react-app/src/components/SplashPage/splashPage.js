import React from "react";
import FromCenterButton from "../FromCenterButton";
import "./splashPage.css";

const SplashPage = () => {

  return (
    <>
      <img
        id="backgroundImage"
        src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/splashpage-background.png"
        alt=""
      ></img>
      <div id="page-container">
        <h1 id="slogan-header">Beautiful sites made easy</h1>
        <FromCenterButton />
      </div>
    </>
  );
};

export default SplashPage;
