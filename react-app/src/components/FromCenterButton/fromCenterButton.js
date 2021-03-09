import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './fromCenterButton.css';

const FromCenterButton = () => {
    const sessionUser = useSelector((state) => state.session.user);

    const history = useHistory();

    const getStarted = (e) => {
        e.preventDefault();
        if(sessionUser) {
            history.push(`/myPage/${sessionUser.id}`);

        } else {
            history.push("/userHub")
        }
    }

    return (
        <>
            <button onClick={(e) => getStarted(e)} className="btn from-center">Get Started</button>
        </>

    )
}

export default FromCenterButton;
