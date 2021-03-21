import React, { useState } from "react";
import BackgroundCarousel from "../BackgroundCarousel";
import LayoutSelector from "../LayoutSelector";
import PreviewContainer from "../PreviewContainer";
import ColorSelector from "../ColorSelector";
import LoadingPageModal from "../../LoadingPageModal";
import FullPreview from "../../FullPreview";
import "./myPageLayout.css"

const MyPageLayout = ({backgroundImg, setBackgroundImg, imageId, setImageId, layout, setLayout, colorPalette, setColorPalette, imageArray}) => {

    const [openModal, setOpenModal] = useState(false);
    const [fullPreview, setFullPreview] = useState(false);

    const buildPage = () => {
        setFullPreview(true)
    }

    const transitionPages = () => {
        setOpenModal(true)
    }

    return (
        <>
            <div className="my-layout">
                <div className="selector-section">
                    <div className="ss-one">
                        <BackgroundCarousel imageId={imageId} setImageId={setImageId} imageArray={imageArray} />
                    </div>
                    <div className="ss-two">
                        <LayoutSelector layout={layout} setLayout={setLayout} backgroundImg={backgroundImg} />
                    </div>
                    <div className="ss-three">
                        <ColorSelector setColorPalette={setColorPalette} colorPalette={colorPalette} imageId={imageId} layout={layout} />
                    </div>
                </div>
                <div className="preview-section">
                    <h1>Page Preview</h1>
                    <div className="preview-container">
                        <PreviewContainer backgroundImg={backgroundImg} setBackgroundImg={setBackgroundImg} layout={layout} colorPalette={colorPalette} imageId={imageId}/>
                    </div>
                    <div className="button-container">
                        <button onClick={buildPage}>Full Preview</button>
                        <button onClick={transitionPages}>Go To Page</button>
                    </div>
                </div>
                {openModal &&
                    <LoadingPageModal openModal={openModal} setOpenModal={setOpenModal}/>
                }
                {fullPreview &&
                    <FullPreview fullPreview={fullPreview} setFullPreview={setFullPreview} backgroundImg={backgroundImg} imageId={imageId} layout={layout} colorPalette={colorPalette}/>
                }
            </div>
        </>
    )
}

export default MyPageLayout;
