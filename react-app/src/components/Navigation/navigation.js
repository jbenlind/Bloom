import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';

const Navigation = () => {

    return (
        <>
            <div id="grid-container">
                <div id="first-fraction">
                    <NavLink id="bloom-title" to="">
                        <span id="b">B</span>
                        <span id="loom">loom</span>
                    </NavLink>
                </div>
                <div id="second-fraction">
                    <NavLink className="link" to="">Templates</NavLink>
                    <NavLink className="link" to="">Find a page</NavLink>
                    <NavLink className="link" to="">Log In</NavLink>
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
