import Follow from '../Follow';

import profileImg from '../../assets/images/demo_profile.png';

import './ProfileCard.css'

const ProfileCard = ({ profile }) => {



    return (
        <div className='test-container'>
            <div className='profile-image-div'>
                <img alt='profile' src={profileImg} className='profile-image'/>
            </div>
            <div className='profile-list-item '>
                <i className='far fa-user'></i>
                { profile.username }
            </div>
            <div className='profile-list-item'>
                <i className='far fa-envelope'></i>
                { profile.email }
            </div>
           <Follow />
            <div className='profile-list-item '>
                <div >
                    Appreciations
                </div>
                <div >
                    { profile.appreciations }
                </div>
            </div>
            <div className='profile-list-item'>
                <div >
                    Followers
                </div>
                <div >
                    { profile.followers }
                </div>
            </div>
            <div className='profile-list-item'>
                <div >
                    Followings
                </div>
                <div >
                    { profile.followings }
                </div>
            </div>
            {/* <div className={styles.profile_about}>
                <h3>About Me</h3>
                <p>Lorum ipsum</p>
            </div> */}
        </div>
    )
};

export default ProfileCard;