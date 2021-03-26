import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPageById } from "../../../../store/userPage";
import { format } from 'date-fns';
import "./topNavPreview.css";

const TopNavPreview = ({imageId, colorPalette, savedImg}) => {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user ? state.session.user.id : null);
    const partnerOne = useSelector((state) => state.userPage.partnerOne ? state.userPage.partnerOne : "");
    const partnerTwo = useSelector((state) => state.userPage.partnerTwo ? state.userPage.partnerTwo : "");
    const date = useSelector((state) => state.userPage.weddingDateTime ? state.userPage.weddingDateTime : "");

    const [standardColor, setStandardColor] = useState("");
    const [primaryColor, setPrimaryColor] = useState("");
    const [primaryName, setPrimaryName] = useState("");
    const [secondaryColor, setSecondColor] = useState("");

    useEffect(() => {
        if(userId) {
            dispatch(getUserPageById(userId))
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
            <div className="top-nav-preview">
                <div className="preview-tabs">
                    <button id={colorPalette === 2 ? primaryName : "basic-black"} className="preview-button">{partnerOne && partnerTwo ? `${partnerOne.slice(0,1)} & ${partnerTwo.slice(0,1)}` : "K & P"}</button>
                    <button id={colorPalette === 2 ? primaryColor : standardColor} className="preview-button">venue</button>
                    <button id={colorPalette === 2 ? primaryColor : standardColor} className="preview-button">RSVP</button>
                </div>
                <div className="card-preview">
                    <div className='top-half-preview'>
                        <img className="profile-image-preview" src={savedImg ? savedImg :"https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg"} alt=""></img>
                    </div>
                    <div className='bot-half-preview'>
                        <h2 id={colorPalette === 2 ? secondaryColor : ""} className="couple-names-preview">{partnerOne && partnerTwo ? `${partnerOne} and ${partnerTwo}` : "Karen and Paul"}</h2>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-preview">joyfully invite you to their<br></br> wedding celebration</p>
                        <div id={colorPalette === 2 ? secondaryColor : ""} className="vertical-line-preview"></div>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-preview">{date ? format(new Date(date), "EEEE MMMM dd, yyyy") :"September 23, 2023"}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavPreview
