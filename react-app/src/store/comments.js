import { getRecipe } from "./recipe";

const SET_COMMENT = 'comments/setComment';
const SET_ALL_COMMENTS = 'comments/setAllComments';
const DELETE_COMMENT = 'comments/deleteComment';
const ADD_COMMENT = 'comments/addComment';
const EDIT_COMMENT = 'comments/editComment';

const setComment = (comment) => ({
    type: SET_COMMENT,
    comment,
});

const setAllComments = (comments) => ({
    type: SET_ALL_COMMENTS,
    comments,
});

const deleteAComment = (id) => ({
    type: DELETE_COMMENT,
    commentId: id,
});

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment,
});

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment
})

export const getComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`);
    const data = await response.json();

    if (response.ok) {
        await dispatch(setComment(data));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getAllComments = () => async (dispatch) => {
    const response = await fetch('/api/comments')
    const data = await response.json();

    if (response.ok) {
        await dispatch(setAllComments(data.comments));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// TODO Test State
export const deleteComment = (id, recipe_id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        await dispatch(deleteAComment(id));
        await dispatch(getRecipe(recipe_id))
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const updateComment = (payload) => async(dispatch) => {
    const response = await fetch(`/api/comments/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const comment = await response.json();
        await dispatch(editComment(comment));
        await dispatch(getRecipe(payload.recipe_id))
        return comment;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// TODO Test State
export const createComment = (payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/recipes/${payload.recipe_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const comment = await response.json();
        await dispatch(addComment(comment));
        await dispatch(getRecipe(payload.recipe_id))
        return comment;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export default function reducer(state = {}, action) {
    let newState = {}
    switch (action.type) {
        case SET_COMMENT:
            newState = { ...state };
            newState[action.comment.id] = action.comment;
            return newState;
        case SET_ALL_COMMENTS:
            action.comments.forEach(comment => {
                newState[comment.id] = comment;
            });
            return { ...state, ...newState };
        case ADD_COMMENT:
            newState = { ...state };
            if (!state[action.comment.id]) {
                newState = { ...state, [action.comment.id]: action.comment };
            }
            return newState;
        case EDIT_COMMENT:
            newState = { ...state };
            newState[action.comment.id] = action.comment;
            return newState;
        case DELETE_COMMENT:    // NOT SHOWING IN STATE
            newState = { ...state };
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
}