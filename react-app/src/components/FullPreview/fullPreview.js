import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TopNav from "../Layouts/SiteLayouts/TopNav";
import BotNav from "../Layouts/SiteLayouts/BotNav";
import LeftNav from "../Layouts/SiteLayouts/LeftNav";
import RightNav from "../Layouts/SiteLayouts/RightNav";
import "./fullPreview.css";

const FullPreview = ({ loaded, setLoaded, setFullPreview, backgroundImg, layout, colorPalette, imageId}) => {

    const [contract, setContract] = useState(false)
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);

    const userInfo = useSelector((state) => state.userPage ? state.userPage : null)

    useEffect(()=> {
        if(userInfo) {
            setLat(userInfo.latitude)
            setLng(userInfo.longitude)
        }
    }, [userInfo])

    const transition = () => {
        setContract(true)
        setLoaded(false)

        setTimeout(() => {
            setFullPreview(false)
        },1000)
    }

    return (
        <>

            <div className="transition-my-site">
                <div className="my-site">
                    <div  className="expand">
                        <div id={contract ? "contract" : ""} style={{backgroundImage: `url(${backgroundImg})`}} className="fullPreview-background">
                            {loaded &&
                            <div className="layout-in">
                                {layout === 1 &&
                                <TopNav imageId={imageId} colorPalette={colorPalette} lat={lat} lng={lng}/>}
                                {layout === 2 &&
                                <BotNav imageId={imageId} colorPalette={colorPalette} lat={lat} lng={lng}/>}
                                {layout === 3 &&
                                <LeftNav imageId={imageId} colorPalette={colorPalette} lat={lat} lng={lng}/>}
                                {layout === 4 &&
                                <RightNav imageId={imageId} colorPalette={colorPalette} lat={lat} lng={lng}/>}
                                <button className="return-button" onClick={(e) => transition()}>Return to Builder</button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FullPreview;
