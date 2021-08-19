import styles from './ProfileCard.module.css';
import profileImg from '../../assets/images/demo_profile.png';

const ProfileCard = ({ profile }) => {



    return (
        <div className={styles.inner_container}>
            <div className={styles.profile_img}>
                <img alt='profile' src={profileImg} />
            </div>
            <div className={styles.profile_username}>
                <i className='far fa-user'></i>
                { profile.username }
            </div>
            <div className={styles.profile_email}>
                <i className='far fa-envelope'></i>
                { profile.email }
            </div>
            <div className={styles.profile_following}>
                
            </div>
            <div className={styles.profile_following_button}>
                
            </div>
            <div className={styles.profile_appreciations}>
                <div>
                    Appreciations
                </div>
                <div>
                    { profile.appreciations }
                </div>
            </div>
            <div className={styles.profile_followers}>
                <div>
                    Followers
                </div>
                <div>
                    { profile.followers }
                </div>
            </div>
            <div className={styles.profile_following}>
                <div>
                    Followings
                </div>
                <div>
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