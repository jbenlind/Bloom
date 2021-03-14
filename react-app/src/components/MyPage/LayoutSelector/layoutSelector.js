import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "./layoutSelector.css";

const LayoutSelector = ({layout, setLayout}) => {
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
            <div className="layout-section">
                <div>
                    <button
                        className={layout === 1 ? "in-use" : "layout-button"}
                        onClick={(e) => setLayout(layoutOne.id)}
                    >Top Nav</button>
                    <button
                        className={layout === 2 ? "in-use" : "layout-button"}
                        onClick={(e) => setLayout(layoutTwo.id)}
                    >Bottom Nav</button>
                </div>
                <div>
                    <button
                        className={layout === 3 ? "in-use" : "layout-button"}
                        onClick={(e) => setLayout(layoutThree.id)}
                    >Left Nav</button>
                    <button
                        className={layout === 4 ? "in-use" : "layout-button"}
                        onClick={(e) => setLayout(layoutFour.id)}
                    >Right Nav</button>
                </div>
            </div>
        </>
    )
}

export default LayoutSelector;
