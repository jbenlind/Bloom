import React from "react";
import "./previewContainer.css";
import TopNavPreview from "../../Layouts/PreviewLayouts/TopNavPreview";
import BottomNavPreview from "../../Layouts/PreviewLayouts/BottomNavPreview";
import LeftNavPreview from "../../Layouts/PreviewLayouts/LeftNavPreview";

const PreviewContainer = ({backgroundImg, layout, imageId}) => {
    return (
        <>
                {!backgroundImg&&
                <div className="preview-text">Select a background image to get started</div>}
               {backgroundImg &&
                <div style={{backgroundImage: `url(${backgroundImg})`}} className="preview-background">
                    {layout === 1 &&
                    <TopNavPreview imageId={imageId}/>}
                    {layout === 2 &&
                    <BottomNavPreview imageId={imageId}/>}
                    {layout === 3 &&
                    <LeftNavPreview imageId={imageId}/>}
                    {layout === 4 &&
                    "right nav"}
                </div>}
        </>
    )
}

export default PreviewContainer;
