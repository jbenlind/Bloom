import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../store/pageElements';
import LayoutImageCarousel from "./LayoutImageCarousel";
import BackgroundImageCarousel from "./BackgroundImageCarousel";
import FromCenterButton from "../FromCenterButton";
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
                <section>
                    <LayoutImageCarousel />
                </section>
                <section id="section-2">
                    <BackgroundImageCarousel />
                </section>
                <section className="color-palette-container">
                    <p className="template-description-horizontal">
                        We even have different color schemes to pick from to really bring your site to life.
                    </p>
                    <div className="palette-images">
                        <img className="color-palette-img" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/color-palette-basic.png" alt=""></img>
                        <img className="color-palette-img" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/color-palette-color.png" alt=""></img>
                    </div>
                    <FromCenterButton />
                </section>
            </div>
        </>
    )
}

export default Templates;
