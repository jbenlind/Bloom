import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';

const Navigation = () => {

    return (
        <>
            <div id="container">
                {/* all caps? */}

                <NavLink id="bloom-title" to="">
                    <span id="b">B</span>
                    <span id="loom">loom</span>
                </NavLink>
                <NavLink className="link" to="">Templates</NavLink>
                <NavLink className="link" to="">Find a page</NavLink>
                <NavLink className="link" to="">Log In</NavLink>
                {/* <NavLink className="link" to="">My page</NavLink> */}
                <NavLink id="getStarted-button" to="">Get Started</NavLink>
            </div>

        </>
    )
}

export default Navigation;
