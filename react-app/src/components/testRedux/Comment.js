import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComment, getAllComments, createComment, updateComment, deleteComment } from "../../store/comments";

const Comment = () => {

    const dispatch = useDispatch();
    const comment = useSelector(state => state.comment)

    const postTestData = async () => {
        const payload = { 
            comment: "TEST COMMENT.",
            recipe_id: 1,
            user_id: 3
        }
        let comment = await dispatch(createComment(payload))
        return comment
    }

    let testComment = {
        comment: "UPDATED TEST COMMENT.",
        id: 24,
        recipe_id: 1,
        user_id: 3
    }

    useEffect(() => {
        dispatch(getAllComments()); // get recipe with all ingredients and
        dispatch(deleteComment(22))
        dispatch(getAllComments()); // get all recipes only in recipe table
        // postTestData()
    }, [dispatch]);

    return (
        <>
            <h2>Test Comment Redux!!!!!!</h2>
        </>
    )
};

export default Comment;