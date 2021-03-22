import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/modal";
import "./loadingPageModal.css";

const LoadingPageModal = ({openModal, setOpenModal}) => {

    const pageName = useSelector((state) => state.userPage.pageName ? state.userPage.pageName : "")

    const closeLoad = () => {
        setOpenModal(false)
    }


    return (
        <>
            {openModal &&
            <Modal>
                <div id="modal-background">
                    <div id="modal-content">
                        {!pageName &&
                        <div className="cant-load">
                            <h3>Please choose a page name to continue</h3>
                            <button onClick={closeLoad}>Close</button>
                        </div>
                        }
                        {pageName &&
                        <div className="can-load">
                            <h3>Are you sure you want to leave?</h3>
                            <div>
                                <button>Leave</button>
                                <button onClick={closeLoad}>Cancel</button>
                            </div>
                        </div>
                        }
                     </div>
                </div>
            </Modal>}
        </>
    )
}

export default LoadingPageModal;
