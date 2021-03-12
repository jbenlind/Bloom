import React from "react";
import "./myPageLayouts.css"

const MyPageLayouts = () => {
    return (
        <>
            <div className="my-layout">
                <div className="vertical-section">

                </div>
                <div className="horizontal-section">
                    <h1>Page Preview</h1>
                    <div className="preview-container"></div>
                    <div>
                        <button>Save Layout</button>
                        <button>Go to page</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPageLayouts;
