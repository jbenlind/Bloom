import React, { useState, useEffect } from "react";
import "./colorSelector.css";

const ColorSelector = ({setColorPalette, imageId }) => {

    const [selected, setSelected] = useState("");
    const [previous, setPrevious] = useState("left");
    const [colorOne, setColorOne] = useState("");
    const [colorTwo, setColorTwo] = useState("");

    const slideSelector = (param) => {
        if(param === "right" && previous === "left") {
            setSelected("slide-right");
            setPrevious("right")
            setColorPalette(2)
        } else if(param === "left" && previous === "right") {
            setSelected("slide-left")
            setPrevious("left")
            setColorPalette(1)
        }
    }

    useEffect(() => {
        if(imageId === 1) {
            setColorOne("one-c1")
            setColorTwo("one-c2")
        } else if(imageId === 2) {
            setColorOne("two-c1")
            setColorTwo("two-c2")
        } else if(imageId === 3) {
            setColorOne("three-c1")
            setColorTwo("three-c2")
        } else if(imageId === 4) {
            setColorOne("four-c1")
            setColorTwo("four-c2")
        } else if(imageId === 5) {
            setColorOne("five-c1")
            setColorTwo("five-c2")
        }

    }, [imageId, selected, setColorOne, setColorTwo])


    return (
        <>
            <div className="color-labels">
                <label>Classic</label>
                <label>Vibrant</label>
            </div>
            {/* <div id={selected} className="outline-slider"></div> */}
            <div className="colorSelector-section">
                <div onClick={(e) => slideSelector("left")} className="standard">
                    <div className="first-standard"></div>
                    <div className="second-standard"></div>
                </div>
                <div></div>
                <div onClick={(e) => slideSelector("right")} className="colored">
                    <div id={colorOne} className="first-color"></div>
                    <div id={colorTwo} className="second-color"></div>
                </div>
            </div>
        </>
    )
}

export default ColorSelector;
