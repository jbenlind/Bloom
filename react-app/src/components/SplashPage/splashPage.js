import React from "react";
import FromCenterButton from "../FromCenterButton";
import Search from "../Search";
import "./splashPage.css";

const SplashPage = ({searching, setSearching}) => {

  return (
    <>
      <img
        id="backgroundImage"
        src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/splash-background.png"
        alt=""
      ></img>
      <div id="page-container">
        <h1 id="slogan-header">Beautiful sites made easy</h1>
        <FromCenterButton />
      </div>
      {searching &&
        <Search searching={searching} setSearching={setSearching} />}
      <div className="footer">
        <a href="https://www.linkedin.com/in/jesse-lindloff-0ba8591aa/"><i className="foot-but fab fa-linkedin"></i></a>
        <a href="https://github.com/jbenlind"><i className="foot-but fab fa-github-square"></i></a>
        <a href="mailto:jbenlind@gmail.com"><i className="foot-but fas fa-envelope-square"></i></a>
      </div>
    </>
  );
};

export default SplashPage;
