import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getUserPageById} from "../../../../store/userPage";
import VenueMap from "../../../VenueMap";
import { format } from 'date-fns';
import RSVPForm from "../../../RSVP";
import "./rightNav.css";

const RightNav = ({imageId, colorPalette, lat, lng}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const pathName = location.pathname
    const userId = useSelector((state) => state.session.user ? state.session.user.id : null);
    const partnerOne = useSelector((state) => state.userPage.partnerOne ? state.userPage.partnerOne : "");
    const partnerTwo = useSelector((state) => state.userPage.partnerTwo ? state.userPage.partnerTwo : "");
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
    const [buttonColor, setButtonColor] = useState("");
    const [footerColor, setFooterColor] = useState("");
    const [rsvpPosition] = useState("vertical-right");
    const [venueColor, setVenueColor] = useState("");

    useEffect(() => {
        if(userId) {
            dispatch(getUserPageById(userId))
        }

        if(colorPalette !== 2) {
            setUnderlined("standard-und-r")
        }

        if(colorPalette === 2 && imageId === 1) {
            setPrimaryColor("primary-one")
            setSecondColor("secondary-one")
            setUnderlined("one-active-r")
            setButtonColor("b-1")
            setFooterColor("f-1")
            setVenueColor("primary-one")
        } else if(colorPalette === 2 && imageId === 2) {
            setPrimaryColor("primary-two")
            setSecondColor("secondary-two")
            setUnderlined("two-active-r")
            setButtonColor("b-2")
            setFooterColor("f-2")
            setVenueColor("primary-two")
        } else if(colorPalette === 2 && imageId === 3) {
            setPrimaryColor("primary-three")
            setSecondColor("secondary-three")
            setUnderlined("three-active-r")
            setButtonColor("b-3")
            setFooterColor("f-3")
            setVenueColor("primary-three")
        } else if(colorPalette === 2 && imageId === 4) {
            setPrimaryColor("primary-four")
            setSecondColor("secondary-four")
            setUnderlined("four-active-r")
            setButtonColor("b-4")
            setFooterColor("f-4")
            setVenueColor("primary-four")
        }else if(colorPalette === 2 && imageId === 5) {
            setPrimaryColor("primary-five")
            setSecondColor("secondary-five")
            setUnderlined("five-active-r")
            setButtonColor("b-5")
            setFooterColor("f-5")
            setVenueColor("primary-five")
        }
    }, [imageId, setStandardColor, colorPalette, dispatch, userId])

    const takeMeHome = () => {
        history.push("/")
    }

    return (
        <>
             <div className="left-nav-preview">
                <div className="site-card-sides">
                {section === 1 &&
                <div className="site-card-pos-r">
                    <div className='top-half-site'>
                        <img className="profile-image-sides" src={profileImg ? profileImg :"https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg"} alt=""></img>
                    </div>
                    <div className='bot-half-site-r'>
                        <h2 id={colorPalette === 2 ? secondaryColor : ""} className="couple-names-site">{partnerOne && partnerTwo ? `${partnerOne} and ${partnerTwo}` : "Karen and Paul"}</h2>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-site">joyfully invite you to their<br></br> wedding celebration</p>
                        <div id={colorPalette === 2 ? secondaryColor : ""} className="vertical-line-site"></div>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-site">{date ? format(new Date(date), "EEEE MMMM dd, yyyy") :"September 23, 2023"}</p>
                    </div>
                    </div>}
                    {section === 2 &&
                    <div className="venue-map-r">
                        <div className="venue-location-r">
                            <div id={venueColor ? venueColor : ""} className="venue-name-g">{venueName}</div>
                            <div className="venue-address-g">{venueAddress}</div>
                            <div className="venue-address-g">{`${venueCity}, ${venueState} ${venueZip}`}</div>
                        </div>
                        <VenueMap lat={lat} lng={lng} />
                        <a id={colorPalette === 2 ? buttonColor : "" } className="directions-button-r" href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}>Get Directions</a>
                    </div>
                    }
                </div>
                <div className="left-nav-preview-tabs-full">
                    <button onClick={(e) => setSection(1)} id={colorPalette === 2 ? primaryColor : standardColor} className={section === 1 ? underlind : "site-button-r"}>{partnerOne && partnerTwo ? `${partnerOne.slice(0,1)} & ${partnerTwo.slice(0,1)}` : "K & P"}</button>
                    <button onClick={(e) => setSection(2)} id={colorPalette === 2 ? primaryColor : standardColor} className={section === 2 ? underlind : "site-button-r"}>venue</button>
                    <button onClick={(e) => setSection(3)} id={colorPalette === 2 ? primaryColor : standardColor} className={section === 3 ? underlind : "site-button-r"}>RSVP</button>
                </div>
                {section === 3 &&
                    <RSVPForm rsvpPosition={rsvpPosition} footerColor={footerColor} buttonColor={buttonColor}/>
                    }
            </div>
            {!pathName.includes("myPage") &&
            <div className="small-footer">
                Powered by <p onClick={takeMeHome} id={footerColor !== "" ? footerColor : ""} className="bloom-logo">Bloom</p>
            </div>}
        </>
    )
}

export default RightNav;
