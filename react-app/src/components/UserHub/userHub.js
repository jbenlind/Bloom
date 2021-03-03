import React from "react";
import { useHistory } from 'react-router-dom';
import './userHub.css';

const UserHub = () => {

    // const history = useHistory();


    return (
        <>
            <div id="hub-background">
                <div id="hub-sidebar">
                    <button className="hub-button">Log In</button>
                    <button className="hub-button">Sign Up</button>
                    <button className="hub-button">Demo</button>
                </div>
            </div>
        </>
    )
}

export default UserHub;
