import React from "react";
import TopNavPreview from "../Layouts/PreviewLayouts/TopNavPreview";
import BottomNavPreview from "../Layouts/PreviewLayouts/BottomNavPreview";
import LeftNavPreview from "../Layouts/PreviewLayouts/LeftNavPreview";
import RightNavPreview from "../Layouts/PreviewLayouts/RightNavPreview";
import "./userSite.css";

const UserSite = ({setOpenModal, setClosed, closed, showContent, backgroundImg, layout, colorPalette}) => {


    const minimize = () => {
        setClosed(true)
        setTimeout(() => {
            setOpenModal(false)
        }, 2000)
    }
 console.log(layout)
    return (
        <>
            <div style={{backgroundImage: `url(${backgroundImg})`}} className="preview-background">
                {!closed && showContent &&
                <button onClick={(e) => minimize()}>Return To builder</button>}
                    {layout === 1 &&
                    <TopNavPreview  colorPalette={colorPalette}/>}
                    {layout === 2 &&
                    <BottomNavPreview  colorPalette={colorPalette}/>}
                    {layout === 3 &&
                    <LeftNavPreview  colorPalette={colorPalette}/>}
                    {layout === 4 &&
                    <RightNavPreview  colorPalette={colorPalette}/>}
            </div>
        </>
    )

}

export default UserSite;
