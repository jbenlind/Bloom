import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/session";
import { useHistory } from "react-router-dom";
import "./loginForm.css";

const LoginForm = ({setAuthenticated}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await dispatch(login(email, password));
        if (user.errors) {
        setErrors(["Login Failed"]);
        } else {
            setAuthenticated(true)
            history.push(`/myPage/${user.id}`)
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
      };

    const updatePassword = (e) => {
    setPassword(e.target.value);
    };

    return (
        <>
            <div className="auth-box">
                <h4>Back Again?</h4>
                <form onSubmit={onLogin}>
                    <div>
                        <input
                            autoComplete="off"
                            name="email"
                            type="text"
                            value={email}
                            onChange={updateEmail}
                            required={true}
                            />
                        <label>Email</label>
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={updatePassword}
                            required={true}
                            />
                        <label>Password</label>
                    </div>
                    <button disabled={!(email && password)} id={email && password ? "ready" : ""} className="not-ready" type="submit">Log In</button>
                    <div className="auth-errors-login">
                        {errors.map((error, idx) => <div key={idx}>{error}</div>)}
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginForm;
