import React, { useState } from "react";
import FromCenterButton from "../FromCenterButton";

import "./splashPage.css";

const SplashPage = ({searching, setSearching}) => {

  const [slide, setSlide] = useState(false);

  const iconClick = () => {
    setSlide("slide-in")
  }

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
    { searching &&
     <div className="searchPage">
        <div className="searchBar">
          <div onClick={iconClick} id={slide === "slide-in" ? "slide-icon-in" : ""} className={!slide ? "searchIcon" : "icon-slider"}><i  className="far fa-search"></i></div>
          <div className>
            <input
            placeholder="Search"
            className={slide ? "slide-ani" : ""}
            id={slide === "slide-in" ? "slide-ani-in" : ""}
            onFocus={(e) => setSlide(true)}
            // onBlur={(e) => setSlide("slide-in")}
            />
          </div>
        </div>
        <div className="circle"></div>
      </div>}
      <div className="footer">
        <a href="https://www.linkedin.com/in/jesse-lindloff-0ba8591aa/"><i className="foot-but fab fa-linkedin"></i></a>
        <a href="https://github.com/jbenlind"><i className="foot-but fab fa-github-square"></i></a>
        <a href="mailto:jbenlind@gmail.com"><i className="foot-but fas fa-envelope-square"></i></a>
      </div>
    </>
  );
};

export default SplashPage;
