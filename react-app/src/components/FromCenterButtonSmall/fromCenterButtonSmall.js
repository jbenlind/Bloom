import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './fromCenterButtonSmall.css';

const FromCenterButtonSmall = () => {
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
    console.log(sessionUser)
    return (
        <>
            <button onClick={(e) => getStarted(e)} className="btn-small from-center-small">OPEN</button>
        </>

    )
}

export default FromCenterButtonSmall;
