import React, { useState } from "react";
import LoginForm from "./LoginForm/";
import SignupForm from "./SignupForm";
import DemoForm from "./DemoForm";
import "./authForms.css";

const AuthForms = ({authenticated, setAuthenticated}) => {

    const [selected, setSelected] = useState("login")


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
                <button className={selected === "login" ? "selected" : "hub-button"}  onClick={(e) =>loginSelected()}>Log In</button>
                <button className={selected === "signup" ? "selected" : "hub-button"}  onClick={(e) => signupSelected()}>Sign Up</button>
                <button className={selected === "demo" ? "selected" : "hub-button"}  onClick={(e) => demoSelected()}>Demo</button>
            </div>
            <div className="form-background">
                {selected === "login" &&
                <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} />}
                {selected === "signup" &&
                <SignupForm authenticated={authenticated} setAuthenticated={setAuthenticated} />}
                {selected === "demo" &&
                <DemoForm setAuthenticated={setAuthenticated}/>}
            </div>
        </>
    )
}

export default AuthForms;
