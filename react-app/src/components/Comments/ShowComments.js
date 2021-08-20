import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, deleteComment, getAllComments, updateComment } from '../../store/comments';
import './Comments.css'


const ShowComments = ({ comments, recipeId }) => {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.session.user?.id);

    const [comment, setComment] = useState('');
    const [editComment, setEditComment] = useState(comment)
    // const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getAllComments())
    }, [dispatch]);

    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(deleteComment(id, recipeId));
    };

    const handleEdit = (e, comment) => {
        e.preventDefault();
        const editableComment = document.getElementById(`comment-${comment.id}`)
        editableComment.hidden = true;
        const editCommentBox = document.getElementById(`edit-comment-${comment.id}`)
        editCommentBox.hidden = false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            comment: comment,
            user_id: userId,
            recipe_id: recipeId
        };
        setComment('')
        dispatch(createComment(payload));
    }

    const handleSubmitEdit = (e, comment) => {
        e.preventDefault();

        const editCommentBox = document.getElementById(`edit-comment-${comment.id}`)
        editCommentBox.hidden = true;
        const editableComment = document.getElementById(`comment-${comment.id}`)
        editableComment.hidden = false;

        const payload = {
            id: comment.id,
            comment: editComment,
            user_id: userId,
            recipe_id: recipeId
        };

        dispatch(updateComment(payload));
    }

    return (
        <div className="comment-container">
            <div className="new-comment-container">
                <div>
                    <img className="new-comment-avatar" src="https://hotpotatorecipes.s3.us-west-1.amazonaws.com/chef.png" alt='chef'/>
                </div>
                <div className="new-comment-form-container">
                    <form
                        
                        onSubmit={(e) => handleSubmit(e)}>
                        <input
                            className="new-comment-form"
                            placeholder="Add Comment"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        ></input>
                        <button
                            id="comment-submit-btn"
                            type="submit"
                        >Submit</button>
                    </form>
                </div>
            </div>
            {comments &&
                comments.map((comment) => (
                    <div
                        key={comment.id}

                    >
                        <form id={`edit-comment-${comment.id}`}
                            hidden={true}
                            onSubmit={(e) => handleSubmitEdit(e, comment)}>
                            <input
                                placeholder={comment.comment}
                                onChange={(e) => setEditComment(e.target.value)}
                            ></input>
                            <button
                                type="submit"
                            >Submit</button>
                        </form>
                        <div id={`comment-${comment.id}`}>
                            {comment.comment}
                            {comment.user_id === userId &&
                                <>
                                    <i
                                        className='fas fa-minus-circle'
                                        onClick={(e) => handleDelete(e, comment.id)}
                                    ></i>
                                    <i
                                        onClick={(e) => handleEdit(e, comment)}
                                        className='fas fa-edit'
                                    >
                                    </i>
                                </>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default ShowComments;