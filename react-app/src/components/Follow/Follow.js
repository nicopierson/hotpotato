import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { removeFollowing, createFollowing } from '../../store/follow';

import styles from './Follow.module.css';

const Follow = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();

    const followings = useSelector(state => state.follow.followings);

    const isFollowing = +userId in followings;
    const [showFollow, setShowFollow] = useState(isFollowing);

    useEffect(() => {
        setShowFollow(isFollowing);
    }, [isFollowing]);

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(createFollowing(userId));
        setShowFollow(true);
    };

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(removeFollowing(userId));
        setShowFollow(false);
    };

    return (
        <div className={styles.follow_container}>
            {!showFollow &&
                <button
                    onClick={handleAdd}
                    className={styles.button_follow}
                >
                    <i className='fas fa-plus-circle'></i>
                    Follow
                </button>
            }
            {showFollow &&
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
            }
        </div>
    )
};

export default Follow;