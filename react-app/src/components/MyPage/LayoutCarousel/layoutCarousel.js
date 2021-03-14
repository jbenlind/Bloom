import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "./layoutCarousel.css";

const LayoutCarousel = () => {
    const dispatch = useDispatch();
    const layouts = useSelector((state) => state.pageElements.pageLayouts ? state.pageElements.pageLayouts : null);

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    return (
        <>
            <div className="my-layout">
                <div>
                    <div>
                        <label>Layout One </label>
                        <input
                        type="radio"
                        />
                    </div>
                    <div>
                        <label>Layout Two </label>
                        <input
                        type="radio"
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Layout Three </label>
                        <input
                        type="radio"
                        />
                    </div>
                    <div>
                        <label>Layout Four </label>
                        <input
                        type="radio"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutCarousel;
