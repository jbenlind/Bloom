import React, { useState } from "react";
import { Modal } from '../../context/modal';
import "./saveModal.css";

const SaveModal = () => {

    const [saving, setSaving] = useState(false)

    return (
        <>
            <Modal >
                {saving === "" &&
                <div>
                    <h3>Are you sure you want to save?</h3>
                    <div>
                        <button onClick={(e) => setSaving(true)}>Save</button>
                        <button>Cancel</button>
                    </div>
                    <span class="save-icon">
                        <span class="loader"></span>
                        <span class="loader"></span>
                        <span class="loader"></span>
                    </span>
                    </div>}
            </Modal>
        </>
    )
}

export default SaveModal;
