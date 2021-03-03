import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';

const Navigation = ({bloomState}) => {


     console.log("------------", bloomState)
    return (
        <>
            <div id="grid-container">
                <div id="first-fraction">
                    <NavLink className={bloomState} id="bloom-title" to="/">
                        <span className={`${bloomState} b`}>B</span>
                        <span id="loom">loom</span>
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
