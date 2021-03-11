import React, { useState } from "react";
import { Modal } from '../../context/modal';
import "./saveModal.css";

const SaveModal = ({openModal, setOpenModal}) => {

    const [saving, setSaving] = useState(false)

    const startSaving = () => {
        setSaving(true)
        setTimeout(() => {
            setOpenModal(false)
        }, 4000)
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
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>}
            </Modal>}
        </>
    )
}

export default SaveModal;
