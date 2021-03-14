import React from "react";
import "./colorSelector.css";

const ColorSelector = ({}) => {
    return (
        <>
            <div className="colorSelector-section">
                <div className="standard">
                    <div className="first-standard"></div>
                    <div className="second-standard"></div>
                </div>
                <div></div>
                <div className="colored">
                    <div className="first-color"></div>
                    <div className="second-color"></div>
                </div>
            </div>
        </>
    )
}

export default ColorSelector;
