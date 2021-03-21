import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/modal";
import UserSite from "../UserSite";
import "./loadingPageModal.css";

const LoadingPageModal = ({openModal, setOpenModal, backgroundImg}) => {

    const pageName = useSelector((state) => state.userPage.pageName ? state.userPage.pageName : "")

    const [loading, setLoading] = useState(false);
    const [closed, setClosed] = useState(false);
    const [showContent, setShowContent] = useState(false)

    const closeLoad = () => {
        setOpenModal(false)
    }

    const startAnimation = () => {
        setLoading(true)

        setTimeout(() => {
            setShowContent(true)
        },1500)

    }

    return (
        <>
            {openModal &&
            <Modal>
                {!pageName &&
                <div className="cant-load">
                    <h3>Please choose a page name to continue</h3>
                    <button onClick={closeLoad}>Close</button>
                </div>
                }
                {pageName && !loading &&
                <div className="can-load">
                    <h3>Are you sure you want to leave?</h3>
                    <div>
                        <button onClick={startAnimation}>Leave</button>
                        <button onClick={closeLoad}>Cancel</button>
                    </div>
                </div>
                }
            </Modal>}
            {loading &&
            <div className="transition-my-site">
                <div className="my-site">
                    <div id={closed ? "contract" : ""} className="expand">
                        <UserSite setOpenModal={setOpenModal} setClosed={setClosed} closed={closed} showContent={showContent} backgroundImg={backgroundImg}/>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default LoadingPageModal;
