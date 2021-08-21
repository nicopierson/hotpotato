
import styles from './Follow.module.css';

const Follow = () => {
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