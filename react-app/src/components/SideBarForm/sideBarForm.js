import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUserPage } from "../../store/userPage";
import { format } from 'date-fns'
import "./sideBarForm.css";

const SideBarForm = ({showSide,
    imageId,
    layout,
    colorPalette,
    pageName, setPageName,
    partnerOne, setPartnerOne,
    partnerTwo, setPartnerTwo,
    weddingDate, setWeddingDate,
    weddingTime, setWeddingTime,
    venueName, setVenueName,
    venueAddress, setVenueAddress,
    venueCity, setVenueCity,
    venueState, setVenueState,
    venueZip, setVenueZip,
    profileImg, setProfileImg,
    savedImg, setSavedImg,
    setOpenModal
}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userId = useSelector((state) => state.session.user ? state.session.user.id : null);
    const userPage = useSelector((state) => state.userPage ? state.userPage : null)

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(userPage) {
            const func = async () => {
                let date = new Date(userPage.weddingDateTime)
                setWeddingDate(userPage.weddingDateTime ? format(date, 'yyyy-MM-dd') : "")
                setWeddingTime(userPage.weddingDateTime ? `${date.getHours()}:${date.getUTCMinutes()}` : "")
                setPageName(userPage.pageName ? userPage.pageName : "")
                setPartnerOne(userPage.partnerOne ? userPage.partnerOne : "")
                setPartnerTwo(userPage.partnerTwo ? userPage.partnerTwo : "")
                setVenueName(userPage.venueName ? userPage.venueName : "")
                setVenueAddress(userPage.venueAddress ? userPage.venueAddress : "")
                setVenueCity(userPage.venueCity ? userPage.venueCity : "")
                setVenueState(userPage.venueState ? userPage.venueState : "")
                setVenueZip(userPage.venueZip ? userPage.venueZip : "")
                setSavedImg(userPage.profileImg ? userPage.profileImg : "")
                setLoaded(true)
                setTimeout(() => {
                    setOpenModal(false)
                }, 500)
            }
            func()
        }
    }, [dispatch,
        userId,
        setPageName,
        setPartnerOne,
        setPartnerTwo,
        setVenueName,
        setVenueAddress,
        setVenueCity,
        setVenueState,
        setVenueZip,
        setProfileImg,
        setWeddingDate,
        setWeddingTime,
        userPage,
        setSavedImg,
        setOpenModal
    ])

    const sendPageInfo = async (e) => {
        e.preventDefault()
        const pageInfo = {
            backgroundImgId: imageId,
            colorPaletteId:(colorPalette === 2 ? imageId : 6),
            pageLayoutId: layout,
            userId: userId,
            pageName,
            partnerOne,
            partnerTwo,
            weddingDateTime: weddingDate && weddingTime ? new Date(weddingDate + "T" + weddingTime).toISOString() : undefined,
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
        e.preventDefault()
        document.getElementById("profileImg").click()
    }

    const updateProfileImg = (e) => {
        const file = e.target.files[0]
        if(file) setProfileImg(file)
    };

    const resPage = () => {
        history.push(`/reservations/${userId}`)
    }

    if(!loaded) return null;
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
                        {!savedImg &&
                            <button onClick={grabImageInput}>Upload Image</button>}
                        {savedImg &&
                            <button onClick={grabImageInput}>Change Image</button>}
                        <div>
                            <input
                             placeholder="your image"
                            type="file"
                            id="profileImg"
                            onChange={updateProfileImg}
                            />
                        </div>
                    </div>
                    <div className="rsvp-block">
                        <button onClick={resPage}>RSVP's</button>
                    </div>
                    <button onClick={sendPageInfo} id="save-form-button"></button>
                </form>
            </div>
        </>
    )
}

export default SideBarForm
