import React from 'react'
import { useHistory } from 'react-router';
import './ProfileDropDown.css'
import chef from '../../images/chef.png'
import { NavLink } from 'react-router-dom';
const ProfileDropDown = ({ LogoutButton, user}) => {

  const history = useHistory();
  const go_to_profile = ()=>{
    history.push(`/profile/${user.id}`)
  }
  return (
    <div>
      <div className="user-navbar-container">
        <NavLink to={`/profile/${user.id}`} exact={true} activeClassName='active'>
          <img className="profile-avatar__image" src={user.profile_img} alt={chef} />
        </NavLink>
        <div className="dropdown-content-container">
          <div className="triangle-container">
            <div className="dropdown-triangle-arrow-up"></div>
          </div>

          <div className="user-navbar-content">

            <div onClick={go_to_profile} className="unc__item"><i class="fas fa-home home-icon"></i>profile</div>

            <div className="unc__item no-drop"><i class="fas fa-cog settings-icon no-drop"></i>Settings</div>

            <div className="unc_hr-container">
              <hr className="unc_hr" />
            </div>
            {user && <div className="logout-container"><LogoutButton /> </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDropDown
