import React from "react";
import "./previewContainer.css";

const PreviewContainer = ({backgroundImg}) => {
    return (
        <>

            <img className="preview-background" src={backgroundImg} alt="Please Select a background"></img>

        </>
    )
}

export default PreviewContainer;
