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
                <p className="templates-header">Your site is only a few clicks away</p>
                <LayoutImageCarousel />
                <BackgroundImageCarousel />
                <div className="spacer"></div>
            </div>
        </>
    )
}

export default Templates;
