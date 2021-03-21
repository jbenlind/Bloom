import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPageById } from "../../../../store/userPage";
import "./topNav.css";

const TopNav = ({imageId, colorPalette}) => {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user ? state.session.user.id : null);
    const partnerOne = useSelector((state) => state.userPage.partnerOne ? state.userPage.partnerOne : "");
    const partnerTwo = useSelector((state) => state.userPage.partnerTwo ? state.userPage.partnerTwo : "");

    const [standardColor, setStandardColor] = useState("");
    const [standardBorder, setStandardBorder] = useState("basic-black");
    const [primaryColor, setPrimaryColor] = useState("");
    const [primaryName, setPrimaryName] = useState("");
    const [secondaryColor, setSecondColor] = useState("");

    useEffect(() => {
        if(userId) {
            dispatch(getUserPageById(userId))
        }

        if(imageId === 1 || imageId === 4 || imageId === 5) {
            setStandardColor("standard-one")
            setStandardBorder("basic-white")
        } else if(imageId === 2 || imageId === 3) {
            setStandardColor("")
            setStandardBorder("basic-black")
        }

        if(colorPalette === 2 && imageId === 1) {
            setPrimaryColor("primary-one")
            setSecondColor("secondary-one")
            setPrimaryName("primary-one-name")
        } else if(colorPalette === 2 && imageId === 2) {
            setPrimaryColor("primary-two")
            setSecondColor("secondary-two")
            setPrimaryName("primary-two-name")
        } else if(colorPalette === 2 && imageId === 3) {
            setPrimaryColor("primary-three")
            setSecondColor("secondary-three")
            setPrimaryName("primary-three-name")
        } else if(colorPalette === 2 && imageId === 4) {
            setPrimaryColor("primary-four")
            setSecondColor("secondary-four")
            setPrimaryName("primary-four-name")
        }else if(colorPalette === 2 && imageId === 5) {
            setPrimaryColor("primary-five")
            setSecondColor("secondary-five")
            setPrimaryName("primary-five-name")
        }
    }, [imageId, setStandardColor, colorPalette, dispatch, userId])

    return (
        <>
            <div className="top-nav">
                <div className="site-tabs">
                    <button id={colorPalette === 2 ? primaryName : standardBorder} className="site-button">{partnerOne && partnerTwo ? `${partnerOne.slice(0,1)} & ${partnerTwo.slice(0,1)}` : "K & P"}</button>
                    <button id={colorPalette === 2 ? primaryColor : standardColor} className="site-button">venue</button>
                    <button id={colorPalette === 2 ? primaryColor : standardColor} className="site-button">RSVP</button>
                </div>
                <div className="site-card">
                    <div className='top-half-site'>
                        <img className="profile-image-site" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg" alt=""></img>
                        <h2 id={colorPalette === 2 ? secondaryColor : ""} className="couple-names-site">{partnerOne && partnerTwo ? `${partnerOne} and ${partnerTwo}` : "Karen and Paul"}</h2>
                    </div>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-site">joyfully invite you to their<br></br> wedding celebration</p>
                        <div id={colorPalette === 2 ? secondaryColor : ""} className="vertical-line-site"></div>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-site">September 23, 2023</p>
                </div>
            </div>
        </>
    )
}

export default TopNav;
