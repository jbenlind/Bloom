import React, { useState } from "react";
import BackgroundCarousel from "../BackgroundCarousel";
import LayoutSelector from "../LayoutSelector";
import PreviewContainer from "../PreviewContainer";
import ColorSelector from "../ColorSelector";
import "./myPageLayout.css"

const MyPageLayout = () => {

    const [backgroundImg, setBackgroundImg] = useState("");
    const [imageId, setImageId] = useState(0)
    const [layout, setLayout] = useState(0);
    const [colorPalette, setColorPalette] = useState(0);

    return (
        <>
            <div className="my-layout">
                <div className="selector-section">
                    <div className="ss-one">
                        <h1>Background Image</h1>
                        <BackgroundCarousel setBackgroundImg={setBackgroundImg} setImageId={setImageId} />
                    </div>
                    <div className="ss-two">
                        <h1>Page Template</h1>
                        <LayoutSelector layout={layout} setLayout={setLayout} />
                    </div>
                    <div className="ss-three">
                        <h1>Color Palette</h1>
                        <ColorSelector colorPalette={colorPalette} setColorPalette={setColorPalette} imageId={imageId} />
                    </div>
                </div>
                <div className="preview-section">
                    <h1>Page Preview</h1>
                    <div className="preview-container">
                        <PreviewContainer backgroundImg={backgroundImg} layout={layout} colorPalette={colorPalette}/>
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
