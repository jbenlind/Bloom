import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SideBarForm from "../SideBarForm";
import SaveModal from "../SaveModal";
import "./slidingSideBar.css"

const SlidingSideBar = ({
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
    savedImg, setSavedImg
}) => {

    const history = useHistory()
    const [showSide, setShowSide] = useState("closed");
    const [openModal, setOpenModal] = useState(false);

    const showSideBar = () => {
        if(showSide === "closed") {
            setShowSide("open")
        } else if(showSide) {
            setShowSide("closed")
        }
    }

    const returnHome = () => {
        history.push("/")
    }

    const clickSave = () => {
        setOpenModal(true)
    }

    return (
        <>
            <section id={showSide === "closed" ? "slide-button-end" : "slide-button-start"} className="slide-button-start">
                <input defaultChecked={false} onClick={showSideBar} type="checkbox" id="myInput" />
                <label htmlFor="myInput">
                <span className="bar top"></span>
                <span className="bar middle"></span>
                <span className="bar bottom"></span>
                </label>
            </section>
            <div className="icon-container">
                <div className={showSide === "open" ? "user-slide" : "user"}><i className="far fa-file-user"></i></div>
                <div className={showSide === "open" ? "calendar-slide" : "calendar"}>< i className="far fa-calendar-alt"></i></div>
                <div className={showSide === "open" ? "map-marker-slide" : "map-marker"}><i className="far fa-map-marker-alt"></i></div>
                <div className={showSide === "open" ? "image-slide" : "image"}><i className="fas fa-image-polaroid"></i></div>
                <div className={showSide === "open" ? "envelope-slide" : "envelope"}><i className="far fa-envelope"></i></div>
                <div onClick={returnHome} className={showSide === "open" ? "home-slide" : "home"}><i className="fas fa-home"></i></div>
                <div onClick={clickSave} className={showSide === "open" ? "save-slide" : "save"}><i className="far fa-save"></i></div>
            </div>
            {openModal &&
            <SaveModal openModal={openModal} setOpenModal={setOpenModal} />
            }
            <div id={showSide} className="side-bar">
                <SideBarForm
                    showSide={showSide}
                    imageId={imageId}
                    layout={layout}
                    colorPalette={colorPalette}
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
                    savedImg={savedImg} setSavedImg={setSavedImg}
                    setOpenModal={setOpenModal}
                    />
            </div>
        </>
    )
}

export default SlidingSideBar;
