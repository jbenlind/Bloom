import React from "react";
import "./previewContainer.css";

const PreviewContainer = ({backgroundImg, layout}) => {
    return (
        <>
                {!backgroundImg&&
                <div className="preview-text">Select a background image to get started</div>}
               {backgroundImg &&
                <img className="preview-background" src={backgroundImg} alt=""></img>}
                {backgroundImg &&
                <div className="preview-layout">
                    {layout === 1 &&
                    <div>1</div>}
                    {layout === 2 &&
                    <div>2</div>}
                    {layout === 3 &&
                    <div>3</div>}
                    {layout === 4 &&
                    <div>4</div>}
                </div>}
        </>
    )
}

export default PreviewContainer;
