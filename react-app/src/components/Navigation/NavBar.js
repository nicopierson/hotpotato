
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
    <nav className="navbar-container-hotpotato">
      <ul className="navbar-ul">
        <div className="navbar-li navbar-title-and-feed">
          <li>
            <NavLink to='/explore' exact={true} activeClassName='active'
              className="navbar-title navbar-btn-container"
            >
              HOTPOTATO

            </NavLink>
          </li>
          {user &&
          <>
            <li className="navbar-btn-container">
              <NavLink to='/explore' exact={true}
              activeClassName='active'
                className="navbar-btn">
                Explore
              </NavLink></li>
            {/* <li className="navbar-btn-container">
            <NavLink to='/view/recipe/1' exact={true}
            activeClassName='active'
              className="navbar-btn">
                RecipeEx
            </NavLink></li> */}
            <li className="navbar-btn-container">
            <NavLink to={`/feed`} exact={true} activeClassName='active'
              className="navbar-btn">
                Your Feed
              </NavLink>
            </li>
          </>
          }
        </div>
        <div className="navbar-li navbar-search">
          <div className="navbar-search__input-wrapper">
            <input
              className="navbar-search-input"
              key="search-bar"
              placeholder={"search for a creation here"}
            />

            <i className="fas fa-search navbar-icon-search--icon navbar-icon-search"></i>

          </div>


        </div>
        <div className="navbar-li navbar-create-and-auth">

          {!user &&
          <>
            <li>
              <NavLink to='/login' exact={true}
              activeClassName='active'
              className="navbar-btn navbar-btn-signed-out"
              id="navbar-login-btn"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' exact={true}
              activeClassName='active'
                className="navbar-btn navbar-btn-signed-out"
              >
                Sign Up
              </NavLink>
            </li>
          </>
          }
          {!user &&
          <>
            <button
              id="demo-login-btn"
              onClick={demoLogin}
            >Demo Login</button>

          </>}
          {user &&
          <>
          {/* temporary logout, delete later */}
            <li className="button-fix navbar-li">
              <CreateRecipeButton />
            </li>

            <li>
              <LogoutButton />
            </li>

            <li className="profile-avatar">
              <NavLink  to={`/profile/${user.id}`} exact={true}
              activeClassName='active'
                className=""
              >
                <img className="profile-avatar__image" src={user.profile_img} alt="chef.png" />
                {/* <div className="profile-background"></div> */}
              </NavLink>




            </li>

            {/* <li className="logout-btn navbar-li">
              <LogoutButton />
            </li> */}



          </>
          }
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
