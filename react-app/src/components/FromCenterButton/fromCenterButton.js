import React from "react";
import { useHistory } from "react-router-dom";
import './fromCenterButton.css';

const FromCenterButton = () => {

    const history = useHistory();

    const getStarted = (e) => {
        e.preventDefault();
        history.push("/userHub");
    }
    return (
        <>
            <button onClick={(e) => getStarted(e)} className="btn from-center">Get Started</button>
        </>

    )
}

export default FromCenterButton;
