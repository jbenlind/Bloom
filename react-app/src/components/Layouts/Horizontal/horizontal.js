import React, { useState} from "react";
import './horizontal.css';

const Horizontal = () => {

    const [backgroundImg, setBackgroundImg] = useState("");


    return (
        <>
            <img className="backgroundImg" src={backgroundImg} alt="">
                <div className="horizontalCard">

                </div>
            </img>
        </>
    )
}

export default Horizontal;
