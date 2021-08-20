import { useDispatch } from 'react-redux';
import { removeLike } from '../../store/like';

import styles from './Like.module.css';

const AddLike = ({ setIsLiked, like }) => {
    const dispatch = useDispatch();

    const handleUnlike = (e) => {
        e.preventDefault();

        dispatch(removeLike(like.id));
        setIsLiked(true);
    };
    
    return (
        <i 
            className={`fas fa-heart ${styles.liked}`}
            onClick={handleUnlike}
        ></i>
    )
};

export default AddLike;