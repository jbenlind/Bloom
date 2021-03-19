import React, { useState } from "react";
import SlidingSideBar from "../SlidingSideBar";
import MyPageLayout from "./MyPageLayout";
import "./myPage.css";

const MyPage = () => {

    const [imageId, setImageId] = useState(3);
    const [backgroundImg, setBackgroundImg] = useState("");
    const [layout, setLayout] = useState(0);
    const [colorPalette, setColorPalette] = useState(0);
    const [pageName, setPageName] = useState("");
    const [partnerOne, setPartnerOne] = useState("");
    const [partnerTwo, setPartnerTwo] = useState("");
    const [weddingDate, setWeddingDate] = useState("");
    const [weddingTime, setWeddingTime] = useState("");
    const [venueName, setVenueName] = useState("");
    const [venueAddress, setVenueAddress] = useState("");
    const [venueCity, setVenueCity] = useState("");
    const [venueState, setVenueState] = useState("");
    const [venueZip, setVenueZip] = useState("");
    const [profileImg, setProfileImg] = useState("");

    return (
        <>
            <div className="my-page-background">
                <SlidingSideBar
                    imageId={imageId} setImageId={setImageId}
                    layout={layout} setLayout={setLayout}
                    colorPalette={colorPalette} setColorPalette={setColorPalette}
                    pageName={pageName} setPageName={setPageName}
                    partnerOne={partnerOne} setPartnerOne={setPartnerOne}
                    partnerTwo={partnerTwo} setPartnerTwo={setPartnerTwo}
                    weddingDate={weddingDate} setWeddingDate={setWeddingDate}
                    weddingTime={weddingTime} setWeddingTime={setWeddingTime}
                    venueName={venueName} setVenueName={setVenueName}
                    venueAddress={venueAddress} setVenueAddress={setVenueAddress}
                    venueCity={venueCity} setVenueCity={setVenueCity}
                    venueState={venueState} setVenueState={setVenueState}
                    venueZip={venueZip} setVenueZip={setVenueZip}
                    profileImg={profileImg} setProfileImg={setProfileImg}
                    />
                <MyPageLayout
                    backgroundImg={backgroundImg} setBackgroundImg={setBackgroundImg}
                    imageId={imageId} setImageId={setImageId}
                    layout={layout} setLayout={setLayout}
                    colorPalette={colorPalette} setColorPalette={setColorPalette}
                    />
            </div>
        </>
    )
}

export default MyPage;
