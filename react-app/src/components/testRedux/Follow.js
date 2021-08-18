import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFollowers, getAllFollowings, createFollowing, removeFollowing } from "../../store/follow";

const Follow = () => {

    const dispatch = useDispatch();
    const follow = useSelector(state => state.follow)

    useEffect(() => {
        dispatch(getAllFollowings(3)); // get recipe with all ingredients and
        dispatch(getAllFollowers(3)); // get all recipes only in recipe table
        dispatch(createFollowing(8))
        dispatch(removeFollowing(5))
        // postTestData()
    }, [dispatch]);

    return (
        <>
            <h2>Test Follow Redux!!!!!!</h2>
        </>
    )
};

export default Follow;