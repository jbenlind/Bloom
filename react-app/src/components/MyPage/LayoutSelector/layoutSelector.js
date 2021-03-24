import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "./layoutSelector.css";

const LayoutSelector = ({layout, setLayout, backgroundImg}) => {
    const dispatch = useDispatch();
    const layouts = useSelector((state) => state.pageElements.pageLayouts ? state.pageElements.pageLayouts : null);

    const layoutOne = layouts.find((layout) => layout.id === 1);
    const layoutTwo = layouts.find((layout) => layout.id === 2);
    const layoutThree = layouts.find((layout) => layout.id === 3);
    const layoutFour = layouts.find((layout) => layout.id === 4);

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    return (
        <>
            <h1 className="image-names">Select A Template</h1>
            <div className="layout-section">
                <div>
                    <button
                        id={backgroundImg ? "" : "not-allowed"}
                        className={layout === 1 ? "in-use" : "layout-button"}
                        onClick={(e) => setLayout(layoutOne.id)}
                        disabled={!backgroundImg}
                    >Classic<span id={backgroundImg ? "hide-tool" : ""} className="text">Select a theme First</span></button>
                    <button
                        id={backgroundImg ? "" : "not-allowed"}
                        className={layout === 2 ? "in-use" : "layout-button"}
                        onClick={(e) => setLayout(layoutTwo.id)}
                        disabled={!backgroundImg}
                    >Inverted<span id={backgroundImg ? "hide-tool" : ""} className="text">Select a theme First</span></button>
                </div>
                <div>
                    <button
                        id={backgroundImg ? "" : "not-allowed"}
                        className={layout === 3 ? "in-use" : "layout-button"}
                        onClick={(e) => setLayout(layoutThree.id)}
                        disabled={!backgroundImg}
                    >Edge<span id={backgroundImg ? "hide-tool" : ""} className="text">Select a theme First</span></button>
                    <button
                        id={backgroundImg ? "" : "not-allowed"}
                        className={layout === 4 ? "in-use" : "layout-button"}
                        onClick={(e) => setLayout(layoutFour.id)}
                        disabled={!backgroundImg}
                    >Side Car<span id={backgroundImg ? "hide-tool" : ""} className="text">Select a theme First</span></button>
                </div>
            </div>
        </>
    )
}

export default LayoutSelector;
