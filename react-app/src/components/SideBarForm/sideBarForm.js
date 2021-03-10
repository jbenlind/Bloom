import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FromCenterButtonSmall from "../FromCenterButtonSmall";
import { createUserPage, getUserPageById} from "../../store/userPage";
import "./sideBarForm.css";

const SideBarForm = ({selected, showSide}) => {
     // set default value to the value from the redux store if it exists
    // proceed with caution with useEffect

    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user ? state.session.user.id: null);

    useEffect(() => {
        dispatch(getUserPageById(userId))
    }, [dispatch, userId])

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
                            onChange={updatePageName}
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
                            <label>Zip code</label>
                        </div>
                    </div>
                    <div className="image-block">
                        <div>
                            <input
                            type="file"
                            id="profileImg"
                            onChange={updateProfileImg}
                            required={true}
                            />
                            <label>Profile Image</label>
                        </div>
                    </div>
                    <div className="rsvp-block">
                        <FromCenterButtonSmall />
                    </div>
                </form>
            </div>
        </>
    )
}

export default SideBarForm
