import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../store/pageElements';
import "./templates.css";

const Templates = ({translateNav}) => {

    const dispatch = useDispatch();
    const images = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null);
    const layouts = useSelector((state) => state.pageElements.pageLayouts ? state.pageElements.pageLayouts : null);
    const palettes = useSelector((state) => state.pageElements.colorPalettes ? state.pageElements.colorPalettes : null);

    const [position, setPosition] = useState("center");
    const [hideLeft, setHideLeft] = useState(true)
    const [hideRight, setHideRight] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getTemplatePageElements())
    }, [dispatch])

    const changePositionLeft = () => {
        if(position === "R2") {
            setPosition("R1")
            setHideRight(true)
            } else if(position === "R1" ) {
                setPosition("center")
            } else if(position === "center" ) {
                setPosition("L1")
            } else if(position === "L1") {
                setPosition("L2")
                setHideLeft(false)
            }
        }

    const changePositionRight = () => {
        if(position === "L2") {
        setPosition("L1")
        setHideLeft(true)
        } else if(position === "L1" ) {
            setPosition("center")
        } else if(position === "center" ) {
            setPosition("R1")
        } else if(position === "R1") {
            setPosition("R2")
            setHideRight(false)
        }
    }


    return (
        <>
            <div className="template-layout">
                <h2 className="template-header">Select a background image</h2>
                <div className="background-images">
                    {images &&
                    images.map((image) => (
                        <div key={image.id} id={position} className="background-images-template">
                            <div className="image-description">{image.name}</div>
                            <img className="template-image" src={image.imageUrl} alt=""></img>
                        </div>
                    ))}
                    {hideLeft &&
                    <button id={hideLeft} className="left-arrow" onClick={changePositionLeft}><i className="far fa-chevron-left"></i></button>}
                    {hideRight &&
                    <button id={hideRight} className="right-arrow" onClick={changePositionRight}><i className="far fa-chevron-right"></i></button>}
                </div>
                <div className="page-layouts">
                    {/* <h2 className="template-header">Select a layout</h2> */}
                </div>
                <div className="color-palettes">

                </div>
            </div>
        </>
    )
}

export default Templates;
