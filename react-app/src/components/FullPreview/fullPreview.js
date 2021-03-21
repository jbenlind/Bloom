import React, { useState } from "react";
import TopNav from "../Layouts/SiteLayouts/TopNav";
import BottomNavPreview from "../Layouts/PreviewLayouts/BottomNavPreview";
import LeftNavPreview from "../Layouts/PreviewLayouts/LeftNavPreview";
import RightNavPreview from "../Layouts/PreviewLayouts/RightNavPreview";
import "./fullPreview.css";

const FullPreview = ({ loaded, setLoaded, setFullPreview, fullPreview, backgroundImg, layout, colorPalette, imageId}) => {

    const [contract, setContract] = useState(false)

    const transition = () => {
        setContract(true)
        setTimeout(() => {
            setLoaded(false)
        }, 300)

        setTimeout(() => {
            setFullPreview(false)

        },1000)
    }

    return (
        <>

            <div className="transition-my-site">
                <div className="my-site">
                    <div id={contract ? "contract" : ""} className="expand">
                        <div style={{backgroundImage: `url(${backgroundImg})`}} className="preview-background">
                            {loaded &&
                            <div  className="layout-in">
                                <button onClick={(e) => transition()}>Return To builder</button>
                                {layout === 1 &&
                                <TopNav imageId={imageId} colorPalette={colorPalette}/>}
                                {layout === 2 &&
                                <BottomNavPreview imageId={imageId} colorPalette={colorPalette}/>}
                                {layout === 3 &&
                                <LeftNavPreview imageId={imageId} colorPalette={colorPalette}/>}
                                {layout === 4 &&
                                <RightNavPreview imageId={imageId} colorPalette={colorPalette}/>}
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FullPreview;
