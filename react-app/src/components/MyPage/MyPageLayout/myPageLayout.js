import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserPage, getUserPageById} from "../../../store/userPage";
import BackgroundCarousel from "../BackgroundCarousel";
import LayoutSelector from "../LayoutSelector";
import PreviewContainer from "../PreviewContainer";
import ColorSelector from "../ColorSelector";
import "./myPageLayout.css"

const MyPageLayout = () => {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user ? state.session.user.id : null);

    const [backgroundImg, setBackgroundImg] = useState("");
    const [imageId, setImageId] = useState(3);
    const [layout, setLayout] = useState(0);
    const [colorPalette, setColorPalette] = useState(1);


    const sendPageStructure = async (e) => {
        e.preventDefault()
        const pageInfo = {
            backgroundImgId: imageId,
            colorPaletteId:colorPalette === 2 ? imageId : null,
            pageLayoutId: layout
        }
        await dispatch(createUserPage(pageInfo))
    }

    return (
        <>
            <div className="my-layout">
                <div className="selector-section">
                    <div className="ss-one">
                        <BackgroundCarousel setBackgroundImg={setBackgroundImg} setImageId={setImageId} />
                    </div>
                    <div className="ss-two">
                        <LayoutSelector layout={layout} setLayout={setLayout} backgroundImg={backgroundImg} />
                    </div>
                    <div className="ss-three">
                        <ColorSelector setColorPalette={setColorPalette} imageId={imageId} layout={layout} />
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
            <button id="save-layout-button" onClick={sendPageStructure}></button>
        </>
    )
}

export default MyPageLayout;
