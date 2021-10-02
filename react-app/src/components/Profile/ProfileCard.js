import Follow from '../Follow';
import ProfileUpdate from './ProfileUpdate';

import './ProfileCard.css'

const ProfileCard = ({ profile, isOwner }) => {

    return (
        <div className='test-container'>
            {isOwner &&
                <ProfileUpdate 
                    profile={profile}
                />
            }
            <div className='profile-image-div'>
                <img 
                    alt='profile' 
                    src={profile.profile_img} 
                    className='profile-image'
                />
            </div>
            <div className='profile-list-item '>
                <i className='far fa-user'></i>
                { profile.username }
            </div>
            <div className='profile-list-item'>
                <i className='far fa-envelope'></i>
                { profile.email }
            </div>
            {!isOwner &&
                <Follow />
            }
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
