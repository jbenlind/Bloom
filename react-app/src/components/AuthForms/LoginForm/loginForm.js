import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/session";
import { useHistory } from "react-router-dom";
import "../authForms.css";

const LoginForm = ({authenticated, setAuthenticated}) => {

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
            history.push(`/usePage/${user.id}`)
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
            <form className="auth-form" onSubmit={onLogin}>
                <div className="input-fields">
                <h4 className="auth-header">Back Again?</h4>
                    <input
                       autoComplete="off"
                       className="auth-input-field"
                       name="email"
                       type="text"
                       placeholder="Email"
                       value={email}
                       onChange={updateEmail}
                       />
                    <input
                        className="auth-input-field"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={updatePassword}
                        />
                    <button disabled={!(email && password)} className={email && password ? "ready" : "not-ready"} type="submit">Log In</button>
                    <div className="auth-errors-login">
                        {errors.map((error, idx) => <div key={idx}>{error}</div>)}
                    </div>
                </div>
            </form>

        </>
    )
}

export default LoginForm;
