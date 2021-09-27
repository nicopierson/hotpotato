import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="signin-page-container">
      <div id="signin-form" className="form-container">
          <form onSubmit={onLogin} className="signup-form">
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className="form-input">
              <div className="form-title">Login</div>
              <div className="already-signed-up">New User?
              <NavLink to='/sign-up' exact={true}
                activeClassName='active'
                className="navbar-btn navbar-btn-signed-out"
              >
                Create an Account
              </NavLink>
              </div>
              <div className="form-input-label">
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-input-field">
                <input
                  className="form-input-field"
                  name="email"
                  type="text"
                  value={email}
                  onChange={updateEmail}
                ></input>
              </div>
            </div>
            <div className="form-input">
              <div className="form-input-label">
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-input-field">
                <input
                  className="form-input-field"
                  name="password"
                  type="password"
                  value={password}
                  onChange={updatePassword}
                ></input>
              </div>
              <button id="login-btn" type="submit">Login</button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default LoginForm;
