import React from "react";
import { useHistory } from "react-router-dom";
import './fromTopButton.css';

const FromTopButton = () => {

    const history = useHistory();

    const getStarted = (e) => {
        e.preventDefault();
        history.push("/userHub");
    }
    return (
        <>
            <button onClick={(e) => getStarted(e)} className="get-started btn from-top">Get Started</button>
        </>

    )
}

export default FromTopButton;
