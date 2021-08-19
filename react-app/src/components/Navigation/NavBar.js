
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import { CreateRecipeButton } from './CreateRecipeButton';

const NavBar = () => {
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
          <li>Explore</li>
          <li>Your Feed</li>
        </div>
        <div className="navbar-li navbar-search">
          <div className="navbar-search__input-wrapper">
            <input
              className="navbar-search-input"
              key="search-bar"
              placeholder={"search for a creation here"}
            />
            <div className="navbar-icon-search">
              <i className="fas fa-search navbar-icon-search--icon"></i>
            </div>
          </div>


        </div>
        <div className="navbar-li navbar-create-and-auth">
          <li navbar-button-create >
              <CreateRecipeButton />
          </li>
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
          {/* <li>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li> */}
          <li className="navbar-li">
            <LogoutButton />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
