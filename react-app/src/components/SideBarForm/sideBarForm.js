import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserPage, getUserPageById} from "../../store/userPage";
import "./sideBarForm.css";

const SideBarForm = ({showSide}) => {

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user ? state.session.user.id : null);

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

    const sendPageInfo = async (e) => {
        e.preventDefault()
        const pageInfo = {
            userId,
            pageName,
            partnerOne,
            partnerTwo,
            weddingDateTime: weddingDate + " " + weddingTime,
            venueName,
            venueAddress,
            venueCity,
            venueState,
            venueZip,
            profileImg
        }
        await dispatch(createUserPage(pageInfo))
    }

    const updatePageName = (e) => {
        setPageName(e.target.value);
    };

    const updatePartnerOne = (e) => {
        setPartnerOne(e.target.value);
    };

    const updatePartnerTwo = (e) => {
        setPartnerTwo(e.target.value);
    };

    const updateWeddingDate = (e) => {
        setWeddingDate(e.target.value)
    };

    const updateWeddingTime = (e) => {
        setWeddingTime(e.target.value)
    };

    const updateVenueName = (e) => {
        setVenueName(e.target.value)
    };

    const updateVenueAddress = (e) => {
        setVenueAddress(e.target.value)
    };

    const updateVenueCity = (e) => {
        setVenueCity(e.target.value)
    };

    const updateVenueState = (e) => {
        setVenueState(e.target.value)
    };

    const updateVenueZip = (e) => {
        setVenueZip(e.target.value)
    };

    const grabImageInput = (e) => {
        document.getElementById("profileImg").click()
    }

    const updateProfileImg = (e) => {
        const file = e.target.files[0]
        if(file) setProfileImg(file)
    };

    return (
        <>

            <div id={showSide === "closed" ? "fade-out" : ""} className="myPage-form">
                <form>
                    <div>
                        <div>
                            <input
                            type="text"
                            value={pageName}
                            onChange={(e) => updatePageName(e)}
                            required={true}
                            />
                            <label>Page Name</label>
                        </div>
                        <div>
                            <input
                            type="text"
                            value={partnerOne}
                            onChange={updatePartnerOne}
                            required={true}
                            />
                            <label>Partner One</label>
                        </div>
                        <div>
                            <input
                            type="text"
                            value={partnerTwo}
                            onChange={updatePartnerTwo}
                            required={true}
                            />
                            <label>Partner Two</label>
                        </div>
                    </div>
                    <div className="wedding-date-block">
                        <div>
                            <input
                            type="date"
                            value={weddingDate}
                            onChange={updateWeddingDate}
                            required={true}
                            />
                            <label>Wedding Date</label>
                        </div>
                        <div>
                            <input
                            type="time"
                            value={weddingTime}
                            onChange={updateWeddingTime}
                            required={true}
                            />
                            <label>Wedding Time</label>
                        </div>
                    </div>
                    <div className="venue-block">
                        <div>
                            <input
                            type="text"
                            value={venueName}
                            onChange={updateVenueName}
                            required={true}
                            />
                            <label>Venue Name</label>
                        </div>
                        <div>
                            <input
                            type="text"
                            value={venueAddress}
                            onChange={updateVenueAddress}
                            required={true}
                            />
                            <label>Address</label>
                        </div>
                        <div>
                            <input
                            type="text"
                            value={venueCity}
                            onChange={updateVenueCity}
                            required={true}
                            />
                            <label>City</label>
                        </div>
                        <div>
                            <input
                            type="text"
                            value={venueState}
                            onChange={updateVenueState}
                            required={true}
                            />
                            <label>State</label>
                        </div>
                        <div>
                            <input
                            type="text"
                            value={venueZip}
                            onChange={updateVenueZip}
                            required={true}
                            />
                            <label>Zip Code</label>
                        </div>
                    </div>
                    <div className="image-block">
                        <div>
                            <input
                            type="button"
                            placeholder="Click Here"
                            value={profileImg !== "" ? profileImg + "...": ""}
                            onClick={grabImageInput}
                            required={true}
                            />
                            <label className="image-label">Profile Image</label>
                        </div>
                        <div>
                            <input
                            type="file"
                            id="profileImg"
                            onChange={updateProfileImg}
                            />
                        </div>
                    </div>
                    <div className="rsvp-block">
                        <button>RSVP's</button>
                    </div>
                    <button onClick={sendPageInfo} id="save-form-button"></button>
                </form>
            </div>
        </>
    )
}

export default SideBarForm
