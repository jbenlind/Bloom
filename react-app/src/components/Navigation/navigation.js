import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { logout } from "../../store/session";
import FromCenterButton from "../FromCenterButton";
import "./navigation.css";

const debounce = (fn) => {
  let frame;

  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener("scroll", debounce(storeScroll), { passive: true });

storeScroll();

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
          <NavLink id={pathName === "" ? "inUse" : pathName} className="bloom-title" to="/">
            <span className="b">B</span>
             <span id={pathName} className="loom">
              loom
            </span>
          </NavLink>
        </div>
        <div id="second-fraction">
          <NavLink id={pathName === "templates"? "inUse" : ""} className="link" to="/templates">
            Templates
          </NavLink>
          <NavLink className="link" to="">
            Find a page
          </NavLink>
          {!authenticated && (
            <NavLink id={pathName === "userHub"? "inUse" : ""} className="link" to="/userHub">
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
          {((authenticated && (pathName !== "templates")) &&  (
            <button className="btn from-center" onClick={logoutFunction}>
              log out
            </button>
          ))}
          {(((!authenticated && (pathName === "")) || (pathName === "templates")))  && (
            <FromCenterButton />
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
