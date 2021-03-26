import React from "react";
import "./rsvpForm.css";

const RSVPForm = ({rsvpPosition, footerColor, buttonColor}) => {

    return (
        <>
            <div className={`rsvp-form-${rsvpPosition}`}>
                <form>
                    <div>
                        <input
                          required={true}/>
                        <label id={footerColor? footerColor :""}>First Name</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label id={footerColor? footerColor :""}>Last Name</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label id={footerColor? footerColor :""}>Email</label>
                    </div>
                    <div>
                        <input
                        // type="radio"
                          required={true}/>
                        <label id={footerColor? footerColor :""}>Attending</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label id={footerColor? footerColor :""}>Number Attending</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label id={footerColor? footerColor :""}>Allergies</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label id={footerColor? footerColor :""}>Allergies Description</label>
                    </div>
                    <button id={buttonColor ? buttonColor :""}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default RSVPForm;
