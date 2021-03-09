import React, { useState } from "react";
import SideBarForm from "../SideBarForm";
import "./slidingSideBar.css"

const SlidingSideBar = () => {

    const [showSide, setShowSide] = useState("open");
    const [locked, setLocked] = useState("locked");
    const [showLock, setShowLock] = useState("locked");
    const [previous, setPrevious] = useState("locked")

    const showSideBar = () => {
        if(showSide === "closed") {
            setShowSide("open")
            setPrevious("locked")
        } else {
            setShowSide("closed")
        }
        if(showLock === "locked") {
            setShowLock("closed")
        } else {
            setShowLock("locked")
        }
    }

    const lockInput = () => {
        if(locked === "locked") {
            setLocked("unlocked")
            setPrevious("locked")
        } else {
            setLocked("locked")
            setPrevious("unlocked")
        }
    }

    return (
        <>
            <section id={showSide === "closed" ? "slide-button-end" : "slide-button-start"} className="slide-button-start">
                <input defaultChecked={true} onClick={showSideBar} type="checkbox" id="myInput" />
                <label for="myInput">
                <span class="bar top"></span>
                <span class="bar middle"></span>
                <span class="bar bottom"></span>
                </label>
            </section>
                {locked === "locked" ?
                <div onClick={showSide === "open" ? lockInput : ""} id={showSide === "open" && previous === "locked" ? "show-lock" : "show-lock-no-a" }  className={showLock}><i class="far fa-lock-alt"></i></div>
                : <div onClick={lockInput} className="unlocked"><i class="far fa-unlock-alt"></i></div>}
                <div className="user"><i class="far fa-file-user"></i></div>
                <div className={locked === "locked" ? "calendar" :"calendar-slide"}><i class="far fa-calendar-alt"></i></div>
                <div className={locked === "locked" ? "map-marker" :"map-marker-slide"}><i class="far fa-map-marker-alt"></i></div>
                <div className={locked === "locked" ? "upload-image" :"upload-image-slide"}><i class="fas fa-image-polaroid"></i></div>
                <div className={locked === "locked" ? "envelope" :"envelope-slide"}><i class="far fa-envelope"></i></div>
                {/* <button></button> */}
            <div id={showSide} className="side-bar">
                <SideBarForm />
            </div>
        </>
    )
}

export default SlidingSideBar;
