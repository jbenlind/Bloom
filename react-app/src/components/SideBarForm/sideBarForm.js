import React, { useState } from "react";
import FromCenterButtonSmall from "../FromCenterButtonSmall";
import "./sideBarForm.css";

const SideBarForm = ({selected, showSide}) => {
     // set default value to the value from the redux store if it exists
    // proceed with caution with useEffect

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
    const [profileImage, setProfileImage] = useState("");


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

    const updateProfileImage = (e) => {
        setProfileImage(e.target.value)
    };

    console.log(showSide)

    return (
<>

            <div id={showSide === "closed" ? "fade-out" : ""} className="myPage-form">
                <form>
                    {selected === "profile" &&
                    <div className="profile-page">
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
                    </div>}
                    {selected === "calendar" &&
                        <div  className="wedding-date-block">
                        <div>
                            <input
                            type="text"
                            value={weddingDate}
                            onChange={updateWeddingDate}
                            required={true}
                            />
                            <label>Wedding Date</label>
                        </div>
                        <div>
                            <input
                            type="text"
                            value={weddingTime}
                            onChange={updateWeddingTime}
                            required={true}
                            />
                            <label>Wedding Time</label>
                        </div>
                    </div>}
                    {selected === "marker" &&
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
                    </div>}
                   { selected === "image" &&
                    <div className="image-block">
                        <input
                        type="text"
                        value={profileImage}
                        onChange={updateProfileImage}
                        required={true}
                        />
                        <label>Profile Image</label>
                    </div>}
                    {selected === "rsvp" &&
                    <div>
                        <p>Open to show guests who <br></br> have rsvp'd</p>
                        <FromCenterButtonSmall />
                    </div>}
                </form>
            </div>
        </>
    )
}

export default SideBarForm
