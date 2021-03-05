import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../store/session";
import "./demoForm.css";

const DemoForm = ({setAuthenticated}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [selected, setSelected] = useState(false)

    const selectedFunction = () => {
            setSelected((prev) => !prev)
    }

    const demoLogin = async (e) => {
        e.preventDefault();
        const demoEmail = "demo@bloom.io";
        const demoPassword = "password";
        setTimeout(await dispatch(login(demoEmail, demoPassword)), 1000);
        setAuthenticated(true)
        history.push("/userPage/1")
      };

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
                <button onClick={demoLogin} disabled={!(selected)} className={selected ? "ready" : "not-ready"} type="submit">Enter</button>
            </div>
        </>
    )
}

export default DemoForm;
