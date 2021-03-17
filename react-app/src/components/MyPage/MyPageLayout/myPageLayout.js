import React, { useState } from "react";
import BackgroundCarousel from "../BackgroundCarousel";
import LayoutSelector from "../LayoutSelector";
import PreviewContainer from "../PreviewContainer";
import ColorSelector from "../ColorSelector";
import "./myPageLayout.css"

const MyPageLayout = () => {

    const [backgroundImg, setBackgroundImg] = useState("");
    const [imageId, setImageId] = useState(3);
    const [layout, setLayout] = useState(0);
    const [colorPalette, setColorPalette] = useState(1);

    return (
        <>
            <div className="my-layout">
                <div className="selector-section">
                    <div className="ss-one">
                        <BackgroundCarousel setBackgroundImg={setBackgroundImg} setImageId={setImageId} />
                    </div>
                    <div className="ss-two">
                        <LayoutSelector layout={layout} setLayout={setLayout} />
                    </div>
                    <div className="ss-three">
                        <ColorSelector colorPalette={colorPalette} setColorPalette={setColorPalette} imageId={imageId} />
                    </div>
                </div>
                <div className="preview-section">
                    <h1>Page Preview</h1>
                    <div className="preview-container">
                        <PreviewContainer backgroundImg={backgroundImg} layout={layout} colorPalette={colorPalette} imageId={imageId}/>
                    </div>
                    <div className="button-container">
                        <button>Go to page</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPageLayout;
