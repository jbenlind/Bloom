import React from "react";
import "./rsvpForm.css";

const RSVPForm = () => {

    return (
        <>
            <div className="rsvp-form">
                <form>
                    <div>
                        <input
                          required={true}/>
                        <label>First Name</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label>Last Name</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label>Email</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label>Attending</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label>Number Attending</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label>Allergies</label>
                    </div>
                    <div>
                        <input
                          required={true}/>
                        <label>Allergies Description</label>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default RSVPForm;
