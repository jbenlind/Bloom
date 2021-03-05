import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements, setPageElements } from '../../store/pageElements';
import "./templates.css";

const Templates = ({translate}) => {

    const dispatch = useDispatch();
    // const [images, setImages] = useState([])
    // const [layouts, setLayouts] = useState([])
    // const [palettes, setPalettes] = useState([])
    const images = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getTemplatePageElements())

        }, [dispatch])

    console.log("images", images)
    return (
        <>
            <div className="templates-layout">
                <div className="background-images-layout">
                    <ul>
                        {images &&
                        images.map((image) => (
                            <li key={image.id}>{image.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="page-layouts">

                </div>
                <div className="color-palettes">

                </div>
            </div>
        </>
    )
}

export default Templates;
