import React, { useState } from "react";
import "./slidingSideBar.css"

const SlidingSideBar = () => {

    const [showSide, setShowSide] = useState("open");
    const [locked, setLocked] = useState("locked")

    const showSideBar = () => {
        if(showSide === "closed") {
            setShowSide("open")
        } else {
            setShowSide("closed")
        }
    }

    const lockInput = () => {
        if(locked === "locked") {
            setLocked("unlocked")
        } else {
            setLocked("locked")
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
                <div onClick={lockInput} className="locked"><i class="far fa-lock-alt"></i></div> :
                <div onClick={lockInput} className="unlocked"><i class="far fa-unlock-alt"></i></div> }
                <div className="user"><i class="far fa-file-user"></i></div>
                <div className={locked === "locked" ? "upload-image" :"upload-image-slide"}><i class="fas fa-image-polaroid"></i></div>
                <div className={locked === "locked" ? "calendar" :"calendar-slide"}><i class="far fa-calendar-alt"></i></div>
                <div className={locked === "locked" ? "map-marker" :"map-marker-slide"}><i class="far fa-map-marker-alt"></i></div>
                <div id={showSide} className="side-bar">
                    
                </div>
            </>
    )
}

export default SlidingSideBar;
