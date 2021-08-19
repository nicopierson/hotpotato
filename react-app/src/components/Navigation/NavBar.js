
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { CreateRecipeButton } from './CreateRecipeButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
import './NavBar.css'

const NavBar = () => {

  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


 

  const demoLogin = async () => {
    const data = await dispatch(login('demo@aa.io', 'password'));
    if (data) {
      setErrors(data);
    }
  }

  return (
    <nav className="navbar-container">
      <ul className="navbar-ul">
        <div className="navbar-li navbar-title-and-feed">
          <li>
            <NavLink to='/' exact={true} activeClassName='active'
            className="navbar-title">
              HOTPOTATO
            </NavLink>
          </li>
          {user && 
          <>
            <li>Explore</li>
            <li>Your Feed</li>
          </>
          }
        </div>
        <div className="navbar-li navbar-search">
          <input
            className="navbar-search-input"
            key="search-bar"
            placeholder={"search for a creation here"}
          />
        </div>
        <div className="navbar-li navbar-create-and-auth">
          
          {!user &&
          <>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </>
          }
          {!user && 
          <button
            id="demo-login-btn"
            onClick={demoLogin}
          >Demo Login</button>
          }
          {user && 
          <>
            <li className="button-fix navbar-li">
              <CreateRecipeButton />
            </li>
            <li className="logout-btn navbar-li">
              <LogoutButton />
            </li>
          </>
          }
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
