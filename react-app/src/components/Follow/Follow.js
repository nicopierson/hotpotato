import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './Follow.module.css';

const Follow = () => {
    const { userId } = useParams();
    const followers = useSelector(state => state.follow.followers);
    const followings = useSelector(state => state.follow.followings);

    const isFollowing = +userId in followings;
    const [showFollow, setShowFollow] = useState(isFollowing);

    console.log('Followers: ', followers);
    console.log('Followings: ', followings);
    console.log(isFollowing);
    console.log('show follow: ', showFollow);

    return (
        <div className={styles.follow_container}>
            <button
                className={styles.button_follow}
            >
                <i className='fas fa-plus-circle'></i>
                Follow
            </button>
            <button
                className={styles.button_followed}
            >
                <span
                    className={styles.text_following}
                >
                    Following
                </span>
                <span
                    className={styles.text_unfollow}
                >
                    Unfollow
                </span>
            </button>
        </div>
    )
};

export default Follow;