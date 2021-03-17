import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPageById} from "../../../../store/userPage";

const RightNavPreview = ({imageId, colorPalette}) => {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user ? state.session.user.id : null);

    const [primaryColor, setPrimaryColor] = useState("");
    const [secondaryColor, setSecondColor] = useState("");
    const [primaryName, setPrimaryName] = useState("");
    const [partnerOne, setPartnerOne] = useState("");
    const [partnerTwo, setPartnerTwo] = useState("");
    const [initials, setInitials] = useState("");
    const [coupleNames, setCoupleNames] = useState("");

    useEffect(() => {
        if(userId) {
            const func = async () => {
                let pageElements = await dispatch(getUserPageById(userId))
                setPartnerOne(pageElements.partnerOne ? pageElements.partnerOne : "")
                setPartnerTwo(pageElements.partnerTwo ? pageElements.partnerTwo : "")
                setInitials(partnerOne && partnerTwo ? `${partnerOne.slice(0,1)} & ${partnerTwo.slice(0,1)}` : "K & P")
                setCoupleNames(partnerOne && partnerTwo ? `${partnerOne} and ${partnerTwo}` : "Karen and Paul")
            }
            func()
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
    }, [imageId,
        colorPalette,
        dispatch,
        userId,
        setInitials,
        setCoupleNames,
        setPartnerOne,
        setPartnerTwo,
        partnerOne,
        partnerTwo])

    return (
        <>
            <div className="left-nav-preview">
                <div className="left-preview-card">
                    <div className='top-half-preview'>
                        <img className="profile-image-preview" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg" alt=""></img>
                        <h2 id={colorPalette === 2 ? secondaryColor : ""} className="couple-names-preview">{coupleNames}</h2>
                    </div>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-preview">joyfully invite you to their<br></br> wedding celebration</p>
                        <div id={colorPalette === 2 ? secondaryColor : ""} className="vertical-line-preview"></div>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-preview">September 23, 2023</p>
                </div>
                <div className="left-nav-preview-tabs">
                    <button id={colorPalette === 2 ? primaryName: "basic-black-transparent"} className="preview-button">{initials}</button>
                    <button id={colorPalette === 2 ? primaryColor : ""} className="preview-button">venue</button>
                    <button id={colorPalette === 2 ? primaryColor : ""} className="preview-button">ceremony</button>
                    <button id={colorPalette === 2 ? primaryColor : ""} className="preview-button">RSVP</button>
                </div>
            </div>
        </>
    )
}

export default RightNavPreview;
