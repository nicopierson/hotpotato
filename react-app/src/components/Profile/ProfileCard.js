import { useState } from 'react';

import styles from './ProfileCard.module.css';
import profileImg from '../../assets/images/demo_profile.png';

const ProfileCard = ({ userId }) => {

    

    return (
        <div className={styles.inner_container}>
            <h2>Profile Card</h2>
            <div className={styles.profile_img}>
                <img alt='profile' src={profileImg} />
            </div>
            <div className={styles.profile_username}>

            </div>
            <div className={styles.profile_email}>

            </div>
            <div className={styles.profile_follow_button}>

            </div>
            <div className={styles.profile_appreciations}>

            </div>
            <div className={styles.profile_followers}>

            </div>
            <div className={styles.profile_following}>

            </div>
            <div className={styles.profile_about}>
                <h3>About Me</h3>
                <p>Lorum ipsum</p>
            </div>
        </div>
    )
};

export default ProfileCard;