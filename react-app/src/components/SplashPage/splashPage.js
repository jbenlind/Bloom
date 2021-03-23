import React from "react";
import FromCenterButton from "../FromCenterButton";

import "./splashPage.css";

const SplashPage = () => {

  return (
    <>
      <img
        id="backgroundImage"
        src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/splash-background-2.png"
        alt=""
      ></img>
      <div id="page-container">
        <h1 id="slogan-header">Beautiful sites made easy</h1>
        <FromCenterButton />
      </div>
      <div className="footer">
        <a href="https://www.linkedin.com/in/jesse-lindloff-0ba8591aa/"><i className="foot-but fab fa-linkedin"></i></a>
        <a href="https://github.com/jbenlind"><i className="foot-but fab fa-github-square"></i></a>
        <button><i className="foot-but fas fa-envelope-square"></i></button>
      </div>
    </>
  );
};

export default SplashPage;
