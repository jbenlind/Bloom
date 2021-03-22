import React from "react";
import { Modal } from '../../context/modal';
import "./contactModal.css";

const ContactModal = ({setShowModal}) => {
    return (
        <>
            <Modal>
                <div id="modal-background-contact">
                    <div id="modal-content-contact">
                        <form className="contact-form">
                            <h4>Get in Touch</h4>
                            <div className="horizontal-contact">
                                <div>
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        autoComplete="off"
                                        />
                                </div>
                                <div>
                                    <input
                                        placeholder="Email"
                                        type="text"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className="contact-message">
                                <textarea
                                    placeholder="Message"
                                    name="textValue"
                                    type="textarea"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="contact-buttons">
                                <button>Send Message</button>
                                <button onClick={(e) => setShowModal(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ContactModal
