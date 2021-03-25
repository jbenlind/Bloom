import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPageById } from "../../../../store/userPage";
import VenueMap from "../../../VenueMap";
import { format } from 'date-fns';
import "./topNav.css";

const TopNav = ({imageId, colorPalette, lat, lng}) => {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user ? state.session.user.id : null);
    const partnerOne = useSelector((state) => state.userPage.partnerOne ? state.userPage.partnerOne : "Partner");
    const partnerTwo = useSelector((state) => state.userPage.partnerTwo ? state.userPage.partnerTwo : "Partner");
    const venueName = useSelector((state) => state.userPage.venueName ? state.userPage.venueName : "Venue Name");
    const venueAddress = useSelector((state) => state.userPage.venueAddress ? state.userPage.venueAddress : "Address");
    const venueCity = useSelector((state) => state.userPage.venueCity? state.userPage.venueCity : "City");
    const venueState = useSelector((state) => state.userPage.venueState ? state.userPage.venueState : "State");
    const venueZip = useSelector((state) => state.userPage.venueZip ? state.userPage.venueZip : "Zip");
    const date = useSelector((state) => state.userPage.weddingDateTime ? state.userPage.weddingDateTime : "");
    const profileImg = useSelector((state) => state.userPage.profileImg ? state.userPage.profileImg: "")

    const [standardColor, setStandardColor] = useState("");
    const [primaryColor, setPrimaryColor] = useState("");
    const [underlind, setUnderlined] = useState("")
    const [secondaryColor, setSecondColor] = useState("");
    const [section, setSection] = useState(1);
    const [buttonColor, setButtonColor] = useState("")

    useEffect(() => {
        if(userId) {
            dispatch(getUserPageById(userId))
        }

        if(imageId === 1 || imageId === 4 || imageId === 5) {
            setStandardColor("standard-one")
        } else if(imageId === 2 || imageId === 3) {
            setStandardColor("")
        }

        if(colorPalette === 2 && imageId === 1) {
            setPrimaryColor("primary-one")
            setSecondColor("secondary-one")
            setUnderlined("one-active")
            setButtonColor("b-1")
        } else if(colorPalette === 2 && imageId === 2) {
            setPrimaryColor("primary-two")
            setSecondColor("secondary-two")
            setUnderlined("two-active")
            setButtonColor("b-2")
        } else if(colorPalette === 2 && imageId === 3) {
            setPrimaryColor("primary-three")
            setSecondColor("secondary-three")
            setUnderlined("three-active")
            setButtonColor("b-3")
        } else if(colorPalette === 2 && imageId === 4) {
            setPrimaryColor("primary-four")
            setSecondColor("secondary-four")
            setUnderlined("four-active")
            setButtonColor("b-4")
        }else if(colorPalette === 2 && imageId === 5) {
            setPrimaryColor("primary-five")
            setSecondColor("secondary-five")
            setUnderlined("five-active")
            setButtonColor("b-5")
        }
    }, [imageId, setStandardColor, colorPalette, dispatch, userId])

    return (
        <>
            <div className="top-nav">
                <div className="site-tabs">
                    <button onClick={(e) => setSection(1)} id={colorPalette === 2 ? primaryColor : standardColor} className={section === 1 ? underlind : "site-button"}>{partnerOne && partnerTwo ? `${partnerOne.slice(0,1)} & ${partnerTwo.slice(0,1)}` : "K & P"}</button>
                    <button onClick={(e) => setSection(2)} id={colorPalette === 2 ? primaryColor : standardColor} className={section === 2 ? underlind : "site-button"}>venue</button>
                    <button onClick={(e) => setSection(3)} id={colorPalette === 2 ? primaryColor : standardColor} className={section === 3 ? underlind : "site-button"}>RSVP</button>
                </div>
                <div className="site-card">
                {section === 1 &&
                <div className="site-card-pos">
                    <div className='top-half-site'>
                        <img className="profile-image-site" src={profileImg ? profileImg :"https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg"} alt=""></img>
                    </div>
                    <div className='bot-half-site'>
                        <h2 id={colorPalette === 2 ? secondaryColor : ""} className="couple-names-site">{partnerOne && partnerTwo ? `${partnerOne} and ${partnerTwo}` : "Karen and Paul"}</h2>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-site">joyfully invite you to their<br></br> wedding celebration</p>
                        <div id={colorPalette === 2 ? secondaryColor : ""} className="vertical-line-site"></div>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-site">{date ? format(new Date(date), "MMM dd, yyyy") :"September 23, 2023"}</p>
                    </div>
                    </div>}
                    {section === 2 &&
                    <div className="venue-map">
                        <VenueMap lat={lat} lng={lng} />
                        <div className="venue-location">
                            <div className="venue-name-g">{venueName}</div>
                            <div className="venue-address-g">{venueAddress}</div>
                            <div className="venue-address-g">{`${venueCity}, ${venueState} ${venueZip}`}</div>
                            <a id={colorPalette === 2 ? buttonColor : "" } className="directions-button" href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}>Get Directions</a>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default TopNav;
