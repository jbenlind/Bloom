import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';

const LayoutCarousel = () => {
    const dispatch = useDispatch();
    const layouts = useSelector((state) => state.pageElements.pageLayouts ? state.pageElements.pageLayouts : null);

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    return (
        <>
            <div className="my-images">
               
            </div>

        </>
    )
}

export default LayoutCarousel;
