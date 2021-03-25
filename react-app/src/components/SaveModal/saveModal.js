import React, { useState } from "react";
import { Modal } from '../../context/modal';
import "./saveModal.css";

const SaveModal = ({openModal, setOpenModal}) => {

    const [saving, setSaving] = useState(false)

    const startSaving = () => {
        document.getElementById("save-form-button").click()
        setSaving(true)
    }

    const changeModal = () => {
        setOpenModal(false)
    }

    return (
        <>
            {openModal &&
            <Modal>
                 <div id="modal-background">
                    <div id="modal-content">
                        <div id="modal-background-save">
                            <div id="modal-content-save">
                        {!saving &&
                            <div className="save-cancel">
                                <h3>Are you sure you want to save?</h3>
                                <div>
                                    <button onClick={startSaving}>Save</button>
                                    <button onClick={changeModal}>Cancel</button>
                                </div>
                            </div>}
                            {saving &&
                                <div className="loading-ani-sec">
                                    <div className="save-section">
                                    <div className="lds-dual-ring"></div>
                                </div>
                                <p className="build-ani">Saving...</p></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>}
        </>
    )
}

export default SaveModal;
