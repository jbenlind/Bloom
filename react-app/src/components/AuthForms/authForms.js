import React, { useState } from "react";
import LoginForm from './LoginForm/';
import SignupForm from './SignupForm';
import DemoForm from './DemoForm';
import './authForms.css';

const AuthForms = () => {

    const [selected, setSelected] = useState('login')

    const loginSelected = () => {
        setSelected("login")
    }

    const signupSelected = () => {
        setSelected("signup")
    }

    const demoSelected = () => {
        setSelected("demo")
    }

    return (
        <>
            <div id="hub-sidebar">
                <button id={selected === "login" ? "selected" : ""} className="hub-button" onClick={(e) =>loginSelected()}>Log In</button>
                <button id={selected === "signup" ? "selected" : ""} className="hub-button" onClick={(e) => signupSelected()}>Sign Up</button>
                <button id={selected === "demo" ? "selected" : ""} className="hub-button" onClick={(e) => demoSelected()}>Demo</button>
            </div>
            <div className="form-background">
                {selected === "login" &&
                <LoginForm />}
                {selected === "signup" &&
                <SignupForm />}
                {selected === "demo" &&
                <DemoForm />}
            </div>
        </>
    )
}

export default AuthForms;
