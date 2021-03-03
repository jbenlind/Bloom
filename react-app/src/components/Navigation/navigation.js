import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';

const Navigation = () => {

    return (
        <>
            <div id="container">
                {/* all caps? */}

                <NavLink className="link" to=""> <img id="icon" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/bloomFavicon.ico.png" alt=""></img>Bloom</NavLink>
                <NavLink className="link" to="">Templates</NavLink>
                <NavLink className="link" to="">Find a page</NavLink>
                <NavLink className="link" to="">Log In</NavLink>
                {/* <NavLink className="link" to="">My page</NavLink> */}
                <NavLink className="link" to="">Get Started</NavLink>
            </div>

        </>
    )
}

export default Navigation;
