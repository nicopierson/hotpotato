import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
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

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="signup-page-container">
      <div id="signup-form" className="form-container">
        <form onSubmit={onSignUp} className="signup-form">
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
              ))}
          </div>
          <div className="form-input">
              <div className="form-title">Create an Account</div>
              <div className="already-signed-up">Already have an account?
              <NavLink to='/login' exact={true}
                activeClassName='active'
                className="navbar-btn navbar-btn-signed-out"
                id="navbar-login-btn"
              >
                Login
              </NavLink>
              </div>
            <div className="form-input-label">
              <label >User Name</label>
            </div>
            <div className="form-input-field">
              <input
              className="form-input-field"
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
          </div>
          <div className="form-input">
            <div className="form-input-label">
              <label >Email</label>
            </div>
            <div className="form-input-field">
              <input
                className="form-input-field"
                type="text"
                name="email"
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
          </div>
          <div className="form-input">
            <div className="form-input-label">
              <label >Password</label>
            </div>
            <div className="form-input-field">
              <input
                className="form-input-field"
                type="password"
                name="password"
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
          </div>
          <div className="form-input">
            <div className="form-input-label">
              <label>Repeat Password</label>
            </div>
            <div className="form-input-field">
              <input
                className="form-input-field"
                type="password"
                name="repeat_password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
          </div>
          <button id="signup-btn" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
