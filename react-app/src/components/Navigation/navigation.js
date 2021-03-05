import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';

const Navigation = ({bloomState}) => {

    return (
        <>
            <div id="grid-container">
                <div id="first-fraction">
                    <NavLink id={bloomState} className="bloom-title" to="/">
                        <span className="b">B</span>
                        <span id={bloomState} className="loom">loom</span>
                    </NavLink>
                </div>
                <div id="second-fraction">
                    <NavLink className="link" to="/templates">Templates</NavLink>
                    <NavLink className="link" to="">Find a page</NavLink>
                    <NavLink className="link" to="/userHub">Log In</NavLink>
                    {/* <NavLink className="link" to="">My page</NavLink> */}
                </div>
                <div id="third-fraction">
                    {/* <Logout /> */}
                    {/* <button className="btn from-top">Get Started</button> */}
                </div>
            </div>

        </>
    )
}

export default Navigation;
