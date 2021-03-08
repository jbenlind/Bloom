import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm/";
import SignupForm from "./SignupForm";
import DemoForm from "./DemoForm";
import "./authForms.css";

const AuthForms = ({authenticated, setAuthenticated}) => {

    const [selected, setSelected] = useState("login");
    const [previous, setPrevious] = useState("login");
    const [current, setCurrent] = useState("p-one")

    useEffect(() => {
        if(previous === "login" && selected === "signup") {
            setCurrent("p-two")
        } else if(previous === "login" && selected === "demo") {
            setCurrent("p-three")
        } else if(previous === "signup" && selected === "login") {
            setCurrent("p-four")
        } else if(previous === "signup" && selected === "demo") {
            setCurrent("p-five")
        }  else if(previous === "demo" && selected === "signup") {
            setCurrent("p-six")
        } else if(previous === "demo" && selected === "login") {
            setCurrent("p-seven")
        }

    }, [selected, previous, current])

    const loginSelected = () => {
            setPrevious(selected)
            setSelected("login")
    }

    const signupSelected = () => {
        setPrevious(selected)
        setSelected("signup")

    }

    const demoSelected = () => {
        setPrevious(selected)
        setSelected("demo")
    }

    return (
        <>
            <div id="hub-sidebar">
                <div id={current} className="start-position"></div>
                <button id={selected === "login" ? "selected" : ""} className="hub-button"  onClick={(e) =>loginSelected()}>Log In</button>
                <button id={selected === "signup" ? "selected" : ""} className="hub-button"  onClick={(e) => signupSelected()}>Sign Up</button>
                <button id={selected === "demo" ? "selected" : ""} className="hub-button"  onClick={(e) => demoSelected()}>Demo</button>
            </div>
            <div className="form-background">
                {selected === "login" &&
                <LoginForm selected={selected} authenticated={authenticated} setAuthenticated={setAuthenticated} />}
                {selected === "signup" &&
                <SignupForm authenticated={authenticated} setAuthenticated={setAuthenticated} />}
                {selected === "demo" &&
                <DemoForm setAuthenticated={setAuthenticated}/>}
            </div>
        </>
    )
}

export default AuthForms;
