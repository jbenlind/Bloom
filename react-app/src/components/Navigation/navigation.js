import React, { useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { logout } from '../../store/session';
import './navigation.css';

const Navigation = ({bloomState, authenticated, setAuthenticated}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const logoutFunction = async (e) => {
        history.push("/");
        await dispatch(logout());
        setAuthenticated(false);
      };

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
                    {!authenticated &&
                    <NavLink className="link" to="/userHub">Log In</NavLink>}
                    {authenticated &&
                    <NavLink className="link" to="">My page</NavLink>}
                </div>
                <div id="third-fraction">
                    {authenticated &&
                    <button className="link logout" onClick={logoutFunction}>log out</button>}
                </div>
            </div>
        </>
    )
}

export default Navigation;
