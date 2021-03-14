import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "./layoutCarousel.css";

const LayoutCarousel = ({setLayout}) => {
    const dispatch = useDispatch();
    const layouts = useSelector((state) => state.pageElements.pageLayouts ? state.pageElements.pageLayouts : null);

    const layoutOne = layouts.find((layout) => layout.id === 1);
    const layoutTwo = layouts.find((layout) => layout.id === 2);
    const layoutThree = layouts.find((layout) => layout.id === 3);
    const layoutFour = layouts.find((layout) => layout.id === 4);

    const [selected, setSelected] = useState(0)

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    return (
        <>
            <div className="layout-section">
                <div>
                    <div>
                        <label>Layout One </label>
                        <input
                            type="radio"
                            onClick={(e) => setLayout(layoutOne.id)}
                            onChange={() => setSelected(1)}
                            checked={selected === 1}
                        />
                    </div>
                    <div>
                        <label>Layout Two </label>
                        <input
                            type="radio"
                            onClick={() => setLayout(layoutTwo.id)}
                            onChange={() => setSelected(2)}
                            checked={selected === 2}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Layout Three </label>
                        <input
                            type="radio"
                            onClick={() => setLayout(layoutThree.id)}
                            onChange={() => setSelected(3)}
                            checked={selected === 3}
                        />
                    </div>
                    <div>
                        <label>Layout Four </label>
                        <input
                            type="radio"
                            onClick={() => setLayout(layoutFour.id)}
                            onChange={() => setSelected(4)}
                            checked={selected === 4}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutCarousel;
