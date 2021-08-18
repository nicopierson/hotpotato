import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLikes, createLike, removeLike, getNumberLikes } from "../../store/like";

const Like = () => {

    const dispatch = useDispatch();

    const likePayload = {
        recipe_id: 1,
        user_id: 8,
    };

    useEffect(() => {
        dispatch(getAllLikes()); // get all likes
        // dispatch(getNumberLikes(1)); // get number of likes for a user
        // dispatch(createLike(likePayload))
        dispatch(removeLike(16))
        // postTestData()
    }, [dispatch]);

    return (
        <>
            <h2>Test Like Redux!!!!!!</h2>
        </>
    )
};

export default Like;