import React, { useState } from "react";
import './loginForm.css';

const LoginForm = () => {

    const [selected, setSelected] = useState('1')

    return (
        <>
            <div id="hub-sidebar">
                    <button className={`${selected} hub-button`}>Log In</button>
                    <button className="hub-button">Sign Up</button>
                    <button className="hub-button">Demo</button>
            </div>
            <div className="form-background">
            </div>
        </>
    )
}

export default LoginForm;
