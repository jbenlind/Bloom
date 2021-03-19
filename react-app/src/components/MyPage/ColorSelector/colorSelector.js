import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "./colorSelector.css";

const ColorSelector = ({setColorPalette, colorPalette, imageId, layout}) => {

    const dispatch = useDispatch();
    const palettes = useSelector((state) => state.pageElements.colorPalettes ? state.pageElements.colorPalettes : null);

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
        dispatch(getTemplatePageElements())
        setSelected(colorPalette > 1 ? "slide-right" : "")
        setPrevious(colorPalette > 1 ? "right" : "left")
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

    }, [imageId, selected, setColorOne, setColorTwo, dispatch, setPrevious, setSelected, colorPalette])

    return (
        <>
            <h1 className="image-names">Select Your Palette</h1>
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
                </button>
                <div></div>
                <button disabled={!layout} id={layout ? "" : "not-allowed"} onClick={(e) => slideSelector("right")} className="colored">
                    <div id={colorOne} className="first-color"></div>
                    <div id={colorTwo} className="second-color"></div>
                </button>
            </div>
        </>
    )
}

export default ColorSelector;
