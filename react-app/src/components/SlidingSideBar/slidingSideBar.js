import React, { useState } from "react";
import "./slidingSideBar.css"

const SlidingSideBar = () => {

    const [showSide, setShowSide] = useState("open")

    const showSideBar = () => {
        if(showSide === "closed") {
            setShowSide("open")
        } else {
            setShowSide("closed")
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
                <i className="far fa-edit"></i>
                <i class="far fa-calendar-alt"></i>
                <i class="far fa-unlock-alt"></i>
                <i class="far fa-lock-alt"></i>
                <div id={showSide} className="side-bar">
                    <div>My Page</div>
                </div>
            </>
    )
}

export default SlidingSideBar;
