import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserPageById } from "../../store/userPage";
import { getTemplatePageElements } from '../../store/pageElements';
import TopNav from "../Layouts/SiteLayouts/TopNav";
import BotNav from "../Layouts/SiteLayouts/BotNav";
import LeftNav from "../Layouts/SiteLayouts/LeftNav";
import RightNav from "../Layouts/SiteLayouts/RightNav";
import "./pageBuild.css";

const PageBuild = () => {

    const dispatch = useDispatch();
    const {userId} = useParams();

    const [backgroundImg, setBackgroundImg] = useState("");
    const [imageId, setImageId] = useState(0)
    const [layout, setLayout] = useState(0);
    const [colorPalette, setColorPalette] = useState(0);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const pageElements = useSelector((state) => state.pageElements ? state.pageElements : null)
    const userInfo = useSelector((state) => state.userPage ? state.userPage : null)

    useEffect(() => {
        if(userId) {
            dispatch(getUserPageById(userId))
            dispatch(getTemplatePageElements())
        }
    }, [dispatch, userId])

    useEffect(() => {
        if(pageElements.backgroundImages.length === 5 && userInfo.backgroundImgId !== null) {
            let selectedImage = pageElements.backgroundImages.find((image) => image.id === userInfo.backgroundImgId)
            setBackgroundImg(selectedImage.imageUrl)
        }
    }, [pageElements, userInfo])

    useEffect(()=> {
        if(userInfo) {
            setLayout(userInfo.pageLayoutId)
            setColorPalette(userInfo.colorPaletteId < 6 ? 2 : 1)
            setImageId(userInfo.backgroundImgId)
            setLat(userInfo.latitude)
            setLng(userInfo.longitude)
        }
    }, [userInfo, setLayout, setColorPalette, setImageId])

    return (
        <>
            <div style={{backgroundImage: `url(${backgroundImg})`}} className="site-background">
                {layout === 1 &&
                <TopNav colorPalette={colorPalette} imageId={imageId} lat={lat} lng={lng}/>}
                {layout === 2 &&
                <BotNav colorPalette={colorPalette} imageId={imageId} lat={lat} lng={lng}/>}
                {layout === 3 &&
                <LeftNav colorPalette={colorPalette} imageId={imageId} lat={lat} lng={lng}/>}
                {layout === 4 &&
                <RightNav colorPalette={colorPalette} imageId={imageId} lat={lat} lng={lng}/>}
            </div>
        </>
    )
}

export default PageBuild;
