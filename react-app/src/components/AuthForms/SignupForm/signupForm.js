import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { signUp, login } from "../../../store/session";
import { Redirect } from 'react-router-dom';

import '../authForms.css';

const SignupForm = ({authenticated, setAuthenticated}) => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onSignUp = async (e) => {
        e.preventDefault();
        const user = await dispatch(
          signUp(username, email, password)
        );
        if (password === repeatPassword) {
          if (!user.errors) {
            setAuthenticated(true);
          } else {
            const errors = user.errors.map(error => error.split(' : ')[1]);
            setErrors(errors);
          }
        } else {
          setErrors([
            "Confirm Password field must be the same as the Password field",
          ]);
        }
      };

      const updateUsername = (e) => {
        setUsername(e.target.value);
      };

      const updateEmail = (e) => {
        setEmail(e.target.value);
      };

      const updatePassword = (e) => {
        setPassword(e.target.value);
      };

      const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
      };

      console.log(repeatPassword === "")

    return (
        <>
            <form className="auth-form" onSubmit={onSignUp}>
                <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="input-fields">
                <h4 className='auth-header'>Welcome</h4>
                    <input
                       autoComplete="off"
                       className="auth-input-field"
                       name="username"
                       type="text"
                       placeholder="Username"
                       value={username}
                       onChange={updateUsername}
                    />
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
                    <input
                        className="auth-input-field"
                        name="repeat_password"
                        type="password"
                        placeholder="Confirm"
                        value={repeatPassword}
                        onChange={updateRepeatPassword}
                    />
                    <button disabled={!(username && email && password && repeatPassword)}  className={username && email && password && repeatPassword ? "ready" : "not-ready"} type="submit">Sign Up</button>
                </div>
            </form>

        </>
    )
}

export default SignupForm;
