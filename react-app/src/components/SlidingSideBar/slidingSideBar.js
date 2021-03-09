import React, { useState } from "react";
import SideBarForm from "../SideBarForm";
import "./slidingSideBar.css"

const SlidingSideBar = () => {

    const [showSide, setShowSide] = useState("open");
    const [selected, setSelected] = useState("profile")

    const showSideBar = () => {
        if(showSide === "closed") {
            setShowSide("open")
        } else if(showSide) {
            setShowSide("closed")
        }
    }

    console.log("--------------", selected)
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
            <div className="icon-container">
                <div onClick={(e) => setSelected("profile")} className="user"><i id={selected === "profile" ? "selected-icon": ""} className="far fa-file-user"></i></div>
                <div onClick={(e) => setSelected("calendar")} className="calendar">< i id={selected === "calendar" ? "selected-icon": ""} className="far fa-calendar-alt"></i></div>
                <div onClick={(e) => setSelected("marker")} className="map-marker"><i id={selected === "marker" ? "selected-icon": ""} className="far fa-map-marker-alt"></i></div>
                <div onClick={(e) => setSelected("image")} className="upload-image"><i id={selected === "image" ? "selected-icon": ""} className="fas fa-image-polaroid"></i></div>
                <div onClick={(e) => setSelected("rsvp")} className="envelope"><i id={selected === "rsvp" ? "selected-icon": ""} className="far fa-envelope"></i></div>
            </div>
                {/* <button></button> */}
            <div id={showSide} className="side-bar">
                <SideBarForm selected={selected} showSide={showSide} />
            </div>
        </>
    )
}

export default SlidingSideBar;
