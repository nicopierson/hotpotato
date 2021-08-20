import { useDispatch } from 'react-redux';
import { createLike } from '../../store/like';

import styles from './Like.module.css';

const RemoveLike = ({ recipeId, userId, setIsLiked }) => {
    const dispatch = useDispatch();

    const handleLike = (e) => {
        e.preventDefault();

        const payload = {
            user_id: userId,
            recipe_id: +recipeId,
        };

        dispatch(createLike(payload));
        setIsLiked(false);
    };

    return (
        <i 
            className={`far fa-heart ${styles.unliked}`}
            onClick={handleLike}
        ></i>
    )
};

export default RemoveLike;