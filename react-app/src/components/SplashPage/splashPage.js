import React, { useEffect } from "react";
import FromTopButton from "../FromTopButton";
import "./splashPage.css";

const SplashPage = ({ setTranslateNav }) => {
  useEffect(() => {
    const url = window.location.href;

    if (!url.includes("userHub")) {
      setTranslateNav("");
    }
  });

  return (
    <>
      <img
        id="backgroundImage"
        src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/splashPage-backgroundImage.png"
        alt=""
      ></img>
      <div id="page-container">
        <h1 id="slogan-header">Beautiful sites made easy</h1>
        <FromTopButton />
      </div>
    </>
  );
};

export default SplashPage;
