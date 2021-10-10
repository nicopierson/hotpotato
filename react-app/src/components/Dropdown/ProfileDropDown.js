import React from 'react'
import { useHistory } from 'react-router';
import './ProfileDropDown.css'

const ProfileDropDown = ({ LogoutButton, user}) => {

  const history = useHistory();
  const go_to_profile = ()=>{
    history.push('/profile')
  }
  return (
    <div>
      <div className="user-navbar-container">
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
            {user && <div className="user-navbar-logout unc__item "> <i class="fas fa-sign-out-alt logout-icon"></i> Logout Button </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDropDown
