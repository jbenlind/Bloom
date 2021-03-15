import React, { useState } from "react";
import "./colorSelector.css";

const ColorSelector = () => {

    const [selected, setSelected] = useState("");
    const [previous, setPrevious] = useState("left")

    const slideSelector = (param) => {
        if(param === "right" && previous === "left") {
            setSelected("slide-right");
            setPrevious("right")
        } else if(param === "left" && previous === "right") {
            setSelected("slide-left")
            setPrevious("left")
        }
    }

    return (
        <>
            <div id={selected} className="outline-slider"></div>
            <div className="colorSelector-section">
                <div onClick={(e) => slideSelector("left")} className="standard">
                    <div className="first-standard"></div>
                    <div className="second-standard"></div>
                </div>
                <div></div>
                <div onClick={(e) => slideSelector("right")} className="colored">
                    <div className="first-color"></div>
                    <div className="second-color"></div>
                </div>
            </div>
        </>
    )
}

export default ColorSelector;
