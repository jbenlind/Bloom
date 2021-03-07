import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../store/pageElements';
import LayoutImageCarousel from "./LayoutImageCarousel";
import BackgroundImageCarousel from "./BackgroundImageCarousel";
import "./templates.css";

const Templates = ({translateNav}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();
    const layouts = useSelector((state) => state.pageElements.pageLayouts ? state.pageElements.pageLayouts : null);
    const palettes = useSelector((state) => state.pageElements.colorPalettes ? state.pageElements.colorPalettes : null);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getTemplatePageElements())
    }, [dispatch])

    return (
        <>
            <div className="template-layout">
                <div className="description-holder">
                    <p className="description-header">View Our <br></br> Templates</p>
                    <p className="templates-description">Get started with any of our best-in-class templates. Customize the background image and color palette to fit your style, and let Bloom do the work for you. Making a beautiful wedding website has never been easier.</p>
                </div>
                <LayoutImageCarousel />
                <BackgroundImageCarousel />
                <div className="color-palettes">
                </div>
            </div>
        </>
    )
}

export default Templates;
