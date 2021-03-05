import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/session";
// import FromTopButton from "../FromTopButton";
import "./navigation.css";

const Navigation = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  const logoutFunction = async (e) => {
    history.push("/");
    await dispatch(logout());
    setAuthenticated(false);
  };

  return (
    <>
      <div id="grid-container">
        <div id="first-fraction">
          <NavLink id={pathName} className="bloom-title" to="/">
            <span className="b">B</span>
             <span id={pathName} className="loom">
              loom
            </span>
          </NavLink>
        </div>
        <div id="second-fraction">
          <NavLink className="link" to="/templates">
            Templates
          </NavLink>
          <NavLink className="link" to="">
            Find a page
          </NavLink>
          {!authenticated && (
            <NavLink className="link" to="/userHub">
              Log In
            </NavLink>
          )}
          {authenticated && (
            <NavLink className="link" to="">
              My page
            </NavLink>
          )}
        </div>
        <div id="third-fraction">
          {authenticated && (
            <button className="link logout" onClick={logoutFunction}>
              log out
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
