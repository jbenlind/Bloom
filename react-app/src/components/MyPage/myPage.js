import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getUserPageById } from "../../store/userPage";
import SlidingSideBar from "../SlidingSideBar";
import MyPageLayout from "./MyPageLayout";
import "./myPage.css";

const MyPage = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    const [imageId, setImageId] = useState();
    const [backgroundImg, setBackgroundImg] = useState("");
    const [layout, setLayout] = useState();
    const [colorPalette, setColorPalette] = useState();
    const [pageName, setPageName] = useState("");
    const [partnerOne, setPartnerOne] = useState("");
    const [partnerTwo, setPartnerTwo] = useState("");
    const [weddingDate, setWeddingDate] = useState();
    const [weddingTime, setWeddingTime] = useState("");
    const [venueName, setVenueName] = useState("");
    const [venueAddress, setVenueAddress] = useState("");
    const [venueCity, setVenueCity] = useState("");
    const [venueState, setVenueState] = useState("");
    const [venueZip, setVenueZip] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(user) {
            const func = async () => {
                let userPage = await dispatch(getUserPageById(user.id))
                setImageId(userPage.backgroundImgId ? userPage.backgroundImgId : "");
                setLayout(userPage.pageLayoutId ? userPage.pageLayoutId : "");
                setColorPalette(userPage.colorPaletteId !== null && userPage.colorPaletteId < 6 ? 2 : 6)
                setLoaded(true)
            }
            func()
        }
    }, [dispatch, user])

    if(!loaded) return null;
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
