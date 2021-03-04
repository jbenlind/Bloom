import React, { useState } from 'react';
import './demoForm.css';

const DemoForm = () => {

    const [selected, setSelected] = useState(false)

    const selectedFunction = () => {
            setSelected((prev) => !prev)
    }

    return (
        <>
            <div className="demo-description">
                <p>Welcome to bloom! A site to make your life easier. Feel free to test out the site and its features, but none of your progress will be saved.</p>
                <label className="radio-button-label">
                    Agree
                    <input
                        className="radio-button"
                        type="radio"
                        value="clicked"
                        onClick={() => selectedFunction()}
                        checked={selected}
                    />
                </label>
                <button disabled={!(selected)} className={selected ? "ready" : "not-ready"} type="submit">Enter</button>
            </div>
        </>
    )
}

export default DemoForm;
