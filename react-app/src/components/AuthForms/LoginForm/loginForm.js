import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from '../../../store/session';
import { Redirect } from 'react-router-dom';

import './loginForm.css';

const LoginForm = () => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await dispatch(login(email, password));
        if (user.errors) {
        setErrors(["Provided credentials are invalid."]);
        }
    };

    return (
        <>
            <form className='login-form' onSubmit={onLogin}>
                <h3 className='form-header'>Log In</h3>
                <p className='form-text'>Let's get you outside</p>
                <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="input-fields">
                    <input
                        className='email-input'
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                        placeholder='Email address...'
                    />
                    <input
                        className='password-input'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Password...'
                    />
                    <button className='login-button' type="submit">Log In</button>
                </div>
            </form>

        </>
    )
}

export default LoginForm;
