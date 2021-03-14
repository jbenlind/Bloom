import React from "react";
import "./previewContainer.css";

const PreviewContainer = ({backgroundImg}) => {
    return (
        <>
                {!backgroundImg&&
                <div className="preview-text">Select a background image to get started</div>}
               {backgroundImg &&
                <img className="preview-background" src={backgroundImg} alt=""></img>}
        </>
    )
}

export default PreviewContainer;
