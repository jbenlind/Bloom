import React, { useState } from "react";
import BackgroundCarousel from "../BackgroundCarousel";
import "./myPageLayouts.css"

const MyPageLayouts = () => {

    const [backgroundImg, setBackgroundImg] = useState(0)

    return (
        <>
            <div className="my-layout">
                <div className="vertical-section">
                    <h1>Background Image</h1>
                    <BackgroundCarousel />
                    <h1>Page Template</h1>
                    <h1>Color Palette</h1>
                </div>
                <div className="horizontal-section">
                    <h1>Page Preview</h1>
                    <div className="preview-container">
                    </div>
                    <div className="button-container">
                        <button>Save Layout</button>
                        <button>Go to page</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPageLayouts;
