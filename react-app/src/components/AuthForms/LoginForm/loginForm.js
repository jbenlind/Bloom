import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from '../../../store/session';
import { Redirect } from 'react-router-dom';

import './loginForm.css';

const LoginForm = ({authenticated}) => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await dispatch(login(email, password));
        if (user.errors) {
        setErrors(["Login Failed"]);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
      };

      const updatePassword = (e) => {
        setPassword(e.target.value);
      };

      if (authenticated) {
        return <Redirect to="/" />;
      }

    return (
        <>
            <form className="auth-form" onSubmit={onLogin}>
                <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="input-fields">
                <h3 className='auth-header'>Log In</h3>
                    <input
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
                    <button className='btn from-top' type="submit">Log In</button>
                </div>
            </form>

        </>
    )
}

export default LoginForm;
