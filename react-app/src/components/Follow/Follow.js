import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { removeFollowing, createFollowing } from '../../store/follow';

import styles from './Follow.module.css';

const Follow = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    const followers = useSelector(state => state.follow.followers);
    const followings = useSelector(state => state.follow.followings);

    const isFollowing = +userId in followings;
    const [showFollow, setShowFollow] = useState(isFollowing);

    console.log('Followers: ', followers);
    console.log('Followings: ', followings);
    console.log(isFollowing);
    console.log('show follow: ', showFollow);

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(createFollowing(userId))
    };

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(removeFollowing(userId));
    };

    return (
        <div className={styles.follow_container}>
            <button
                onClick={handleAdd}
                className={styles.button_follow}
            >
                <i className='fas fa-plus-circle'></i>
                Follow
            </button>
            <button
                onClick={handleRemove}
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