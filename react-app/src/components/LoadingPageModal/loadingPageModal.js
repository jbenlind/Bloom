import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/modal";
import "./loadingPageModal.css";

const LoadingPageModal = ({openModal, setOpenModal}) => {

    const history = useHistory()
    const [leaving, setLeaving] = useState(false)

    const pageName = useSelector((state) => state.userPage.pageName ? state.userPage.pageName : "")
    const userId = useSelector((state) => state.session.user.id ? state.session.user.id : null)

    const closeLoad = () => {
        setOpenModal(false)
    }

    const leavePage = () => {
        setLeaving(true)
        setTimeout(() => {

            history.push(`/${pageName.split(" ").join("")}-${userId}`)
        }, 2000)
    }

    return (
        <>
            {openModal &&
            <Modal>
                <div id="modal-background">
                    <div id="modal-content">
                        {!pageName &&
                        <div className="cant-load">
                            <h3>Please enter a page name to continue</h3>
                            <button onClick={closeLoad}>Close</button>
                        </div>
                        }
                        {pageName && !leaving &&
                        <div className="can-load">
                            <h3>Are you sure you want to leave?</h3>
                            <div>
                                <button onClick={leavePage}>Leave</button>
                                <button onClick={closeLoad}>Cancel</button>
                            </div>
                        </div>
                        }
                         {leaving &&
                         <div className="loading-ani-sec">
                                <div className="save-section">
                                <div className="lds-dual-ring"></div>
                                </div>
                                <p className="build-ani">Building your page</p></div>}
                     </div>
                </div>
            </Modal>}
        </>
    )
}

export default LoadingPageModal;
