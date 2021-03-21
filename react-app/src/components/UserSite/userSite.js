import React from "react";
import TopNavPreview from "../Layouts/PreviewLayouts/TopNavPreview";
import BottomNavPreview from "../Layouts/PreviewLayouts/BottomNavPreview";
import LeftNavPreview from "../Layouts/PreviewLayouts/LeftNavPreview";
import RightNavPreview from "../Layouts/PreviewLayouts/RightNavPreview";
import "./userSite.css";

const UserSite = ({setOpenModal, setClosed, closed, showContent, backgroundImg, layout, colorPalette, imageId}) => {


    const minimize = () => {
        setClosed(true)
        setTimeout(() => {
            setOpenModal(false)
        }, 950)
    }

    return (
        <>
            <div style={{backgroundImage: `url(${backgroundImg})`}} className="preview-background">
                {!closed && showContent &&
                    <div>
                    <button onClick={(e) => minimize()}>Return To builder</button>
                    {layout === 1 &&
                    <TopNavPreview imageId={imageId} colorPalette={colorPalette}/>}
                    {layout === 2 &&
                    <BottomNavPreview imageId={imageId} colorPalette={colorPalette}/>}
                    {layout === 3 &&
                    <LeftNavPreview imageId={imageId} colorPalette={colorPalette}/>}
                    {layout === 4 &&
                    <RightNavPreview imageId={imageId} colorPalette={colorPalette}/>}
                    </div>}
            </div>
        </>
    )

}

export default UserSite;
