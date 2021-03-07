import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../../store/session";
import { useHistory } from "react-router-dom";
import "./signupForm.css";

const SignupForm = ({authenticated, setAuthenticated}) => {

  const dispatch = useDispatch();
  const history = useHistory();
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
        history.push(`/usePage/${user.id}`)
      } else {
        const errors = user.errors.map(error => error.split(" : ")[1]);
        setErrors(errors);
      }
    } else {
      setErrors([
        "Passwords must match",
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

  return (
    <>
      <div className="auth-box-two">
        <h4>Welcome</h4>
          <form onSubmit={onSignUp}>
            <div>
              <input
              autoComplete="off"
              name="username"
              type="text"
              value={username}
              onChange={updateUsername}
              required={true}
              />
              <label>Username</label>
            </div>
            <div>
              <input
                autoComplete=""
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
            <div>
              <input
                name="repeat_password"
                type="password"
                value={repeatPassword}
                onChange={updateRepeatPassword}
                required={true}
                />
              <label>Confirm</label>
            </div>
            <button disabled={!(username && email && password && repeatPassword)}  id={username && email && password && repeatPassword ? "ready" : ""} className="not-ready" type="submit">Sign Up</button>
            <div className="auth-errors-signUp">
              {errors.map((error, idx) => <div key={idx}>{error}</div>)}
            </div>
        </form>
      </div>
    </>
  )
}

export default SignupForm;
