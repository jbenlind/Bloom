import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUserPageById} from "../../store/userPage";
import SlidingSideBar from "../SlidingSideBar";
import MyPageLayout from "./MyPageLayout";
import "./myPage.css";

const MyPage = () => {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user ? state.session.user.id : null);

    const [backgroundImg, setBackgroundImg] = useState("");
    const [imageId, setImageId] = useState(3);
    const [layout, setLayout] = useState(0);
    const [colorPalette, setColorPalette] = useState(1);
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

    useEffect(() => {
        if(userId) {
            const func = async () => {
                let pageElements = await dispatch(getUserPageById(userId))
                setBackgroundImg(pageElements.backgroundImgId ? pageElements.backgroundImgId : 0)
                setColorPalette(pageElements.colorPaletteId ? pageElements.colorPaletteId : 0)
                setLayout(pageElements.pageLayoutId ? pageElements.pageLayoutId : 0)
                setPageName(pageElements.pageName ? pageElements.pageName : "")
                setPartnerOne(pageElements.partnerOne ? pageElements.partnerOne : "")
                setPartnerTwo(pageElements.partnerTwo ? pageElements.partnerTwo : "")
                // setWeddingDate(pageElements.weddingDateTime ? pageElements.weddingDateTime : "") get help
                setVenueName(pageElements.venueName ? pageElements.venueName : "")
                setVenueAddress(pageElements.venueAddress ? pageElements.venueAddress : "")
                setVenueCity(pageElements.venueCity ? pageElements.venueCity : "")
                setVenueState(pageElements.venueState ? pageElements.venueState : "")
                setVenueZip(pageElements.venueZip ? pageElements.venueZip : "")
                setProfileImg(pageElements.profileImg ? pageElements.profileImg : "")
            }
            func()
        }
    }, [dispatch, userId])



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
