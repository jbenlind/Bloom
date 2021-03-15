import React, { useState } from "react";
import { Modal } from '../../context/modal';
import "./saveModal.css";

const SaveModal = ({openModal, setOpenModal}) => {

    const [saving, setSaving] = useState(false)

    const startSaving = () => {
        document.getElementById("save-form-button").click()
        setSaving(true)
        setTimeout(() => {
            setOpenModal(false)
        }, 1500)
    }

    const changeModal = () => {
        setOpenModal(false)
    }

    return (
        <>
           { openModal &&
            <Modal>
                {!saving &&
                <div className="save-cancel">
                    <h3>Are you sure you want to save?</h3>
                    <div>
                        <button onClick={startSaving}>Save</button>
                        <button onClick={changeModal}>Cancel</button>
                    </div>
                </div>}
              {saving &&
              <div className="save-section">
               <div className="lds-dual-ring"></div>
            </div>}
            </Modal>}
        </>
    )
}

export default SaveModal;
