import React, { useState } from "react";
import './authForms.css';

const AuthForms = () => {

    const [selected, setSelected] = useState('1')

    return (
        <>
            <div id="hub-sidebar">
                    <button className={`${selected} hub-button`}>Log In</button>
                    <button className="hub-button">Sign Up</button>
                    <button className="hub-button">Demo</button>
                    <img className="auth-icon" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/bloomFavicon.ico.png" alt=""></img>
            </div>
            <div className="form-background">
                {/* switch */}
            </div>
        </>
    )
}

export default AuthForms;
