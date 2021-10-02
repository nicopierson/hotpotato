import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, deleteComment, getAllComments, updateComment } from '../../store/comments';
import { NavLink } from 'react-router-dom';

import './Comments.css'


const ShowComments = ({ comments, recipeId }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const userId = useSelector(state => state.session.user?.id);
    const currentUserName = useSelector(state => state.session.user?.username)

    const [comment, setComment] = useState('');
    const [editComment, setEditComment] = useState(comment)
    // const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(getAllComments());
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
            {user && 
            <div className="new-comment-container">
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className="new-comment-avatar" src={user.profile_img} alt='chef'/>
                        <div className="current-user-username">{currentUserName}</div>
                    </NavLink>
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
            }
            {!user &&
            <div className="join-the-conversation-container">
                <div className="join-the-conversation">
                    <span> 
                        <NavLink to='/sign-up' exact={true} 
                        activeClassName='active' 
                        id="join-the-conversation-signup">
                            Sign Up
                        </NavLink>
                    </span>
                    <span>or</span>
                    <span> 
                        <NavLink to='/login' exact={true} 
                        activeClassName='active' 
                        id="join-the-conversation-login">
                            Login
                        </NavLink>
                    </span>
                    <span>to join the conversation</span>
                </div>
                <div className="join-the-conversation-links">
                </div>
            </div>
            }
            {comments &&
                comments.map((comment) => (
                    <div className="single-comment">
                        <NavLink to={`/profile/${comment.user_id}`}>
                            <img src={comment.profile_img} alt="chef" className="new-comment-avatar"></img>
                        </NavLink>
                        <div
                            key={comment.id}
                            className="single-comment-container"

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
                            <div>
                                <div className="comment-user">
                                    {comment.username}
                                    {comment.user_id === userId &&
                                        <>
                                            <i
                                                id="delete-comment-btn" className='fas fa-minus-circle comment-utilities'
                                                onClick={(e) => handleDelete(e, comment.id)}
                                            ></i>
                                            <i
                                                onClick={(e) => handleEdit(e, comment)}
                                                id="edit-comment-btn" className='fas fa-edit comment-utilities'
                                            >
                                            </i>
                                        </>
                                    }
                                </div>
                                <div id={`comment-${comment.id}`}>
                                    {comment.comment}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default ShowComments;