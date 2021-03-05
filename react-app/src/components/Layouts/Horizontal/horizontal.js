import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../store/pageElements';
import './horizontal.css';

const Horizontal = () => {

    const dispatch = useDispatch();
    const images = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null);

    let image = images.find((image) => image.id === 3)

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    return (
        <>
            <img className="backgroundImg" src={image.imageUrl} alt="">
                <div className="horizontalCard">

                </div>
            </img>

        </>
    )
}

export default Horizontal;
