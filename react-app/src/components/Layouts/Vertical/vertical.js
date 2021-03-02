import React, { useState } from "react";
import './vertical.css';

const Vertical = () => {

    const [backgroundImg, setBackgroundImg] = useState("");

    return (
        <>
            <img className="backgroundImg" src={backgroundImg} alt="">
                <div className="verticalCard">

                </div>
            </img>
        </>
    )
}

export default Vertical;
