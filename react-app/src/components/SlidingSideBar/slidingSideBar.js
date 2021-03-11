import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SideBarForm from "../SideBarForm";
import SaveModal from "../SaveModal";
import "./slidingSideBar.css"

const SlidingSideBar = () => {

    const history = useHistory()
    const [showSide, setShowSide] = useState("open");
    const [openModal, setOpenModal] = useState(false);

    const showSideBar = () => {
        if(showSide === "closed") {
            setShowSide("open")
        } else if(showSide) {
            setShowSide("closed")
        }
    }

    const returnHome = () => {
        history.push("/")
    }

    const clickSave = (e) => {
        // document.getElementById("save-form-button").click()
        setOpenModal(true)
    }

    return (
        <>
            <section id={showSide === "closed" ? "slide-button-end" : "slide-button-start"} className="slide-button-start">
                <input defaultChecked={true} onClick={showSideBar} type="checkbox" id="myInput" />
                <label htmlFor="myInput">
                <span className="bar top"></span>
                <span className="bar middle"></span>
                <span className="bar bottom"></span>
                </label>
            </section>
            <div className="icon-container">
                <div className={showSide === "open" ? "user-slide" : "user"}><i className="far fa-file-user"></i></div>
                <div className={showSide === "open" ? "calendar-slide" : "calendar"}>< i className="far fa-calendar-alt"></i></div>
                <div className={showSide === "open" ? "map-marker-slide" : "map-marker"}><i className="far fa-map-marker-alt"></i></div>
                <div className={showSide === "open" ? "image-slide" : "image"}><i className="fas fa-image-polaroid"></i></div>
                <div className={showSide === "open" ? "envelope-slide" : "envelope"}><i className="far fa-envelope"></i></div>
                <div onClick={returnHome} className={showSide === "open" ? "home-slide" : "home"}><i class="fas fa-home"></i></div>
                <div onClick={clickSave} className={showSide === "open" ? "save-slide" : "save"}><i class="far fa-save"></i></div>
            </div>
           {openModal &&
            <div>
                <SaveModal />
            </div>}
            <div id={showSide} className="side-bar">
                <SideBarForm showSide={showSide} />
            </div>
        </>
    )
}

export default SlidingSideBar;
