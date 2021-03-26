import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "./colorSelector.css";

const ColorSelector = ({setColorPalette, colorPalette, imageId, layout}) => {

    const dispatch = useDispatch();
    const palettes = useSelector((state) => state.pageElements.colorPalettes ? state.pageElements.colorPalettes : null);

    const [selected, setSelected] = useState(colorPalette !== 6 ? "slide-right" : "slide-left")
    const [colorOne, setColorOne] = useState("");
    const [colorTwo, setColorTwo] = useState("");

    const slideSelector = (param) => {
        if(param === "right" && selected === "slide-left") {
            setSelected("slide-right");
            setColorPalette(2)
        } else if(param === "left" && selected === "slide-right") {
            setSelected("slide-left")
            setColorPalette(1)
        }
    }

    useEffect(() => {
        dispatch(getTemplatePageElements())
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

    }, [imageId, setColorOne, setColorTwo, dispatch])

    return (
        <>
            <h1 className="image-names">Select a Palette</h1>
            <div className="color-labels">
                <label>Classic</label>
               {palettes.length > 0 && imageId > 0 &&
               <label>{palettes[imageId -1].name}</label>}
            </div>
            <div id={selected} className="outline-slider"></div>
            <div className="colorSelector-section">
                <button disabled={!layout} id={layout ? "" : "not-allowed"} onClick={(e) => slideSelector("left")} className="standard">
                    <div className="first-standard"></div>
                    <div className="second-standard"></div>
                    <span id={layout ? "hide-tool" : ""} className="text">Select a Layout First</span>
                </button>
                <div></div>
                <button disabled={!layout} id={layout ? "" : "not-allowed"} onClick={(e) => slideSelector("right")} className="colored">
                    <div id={colorOne} className="first-color"></div>
                    <div id={colorTwo} className="second-color"></div>
                    <span id={layout ? "hide-tool" : ""} className="text">Select a Layout First</span>
                </button>
            </div>
        </>
    )
}

export default ColorSelector;
