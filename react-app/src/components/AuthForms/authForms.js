import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from './LoginForm/';
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
                    <div id="spacer"></div>
            </div>
            <div className="form-background">
                <Switch>
                    <Route to='/loginForm'>
                        <LoginForm />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

export default AuthForms;
