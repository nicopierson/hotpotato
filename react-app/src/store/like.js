import { SET_RECIPE } from "./recipe";
const SET_LIKES = 'likes/SET_LIKE';

// Set recipe and update full recipe details to store when deleting or adding like
const addLike = (recipe) => ({
    type: SET_RECIPE,
    recipe,
});

const setLikes = (likes) => ({
    type: SET_LIKES,
    likes,
});

export const loadLikes = (userId) => async (dispatch) => {
    const response = await fetch(`/api/likes/users/${userId}`);
    
    if (response.ok) {
        const { likes } = await response.json();
        dispatch(setLikes(likes))
        return likes;
    } else {
        return ['An error occurred. Please try again.']
    }
};

export const getAllLikes = () => async (dispatch) => {
    const response = await fetch('/api/likes')
    
    if (response.ok) {
        const likes = await response.json();
        return likes;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getNumberLikes = (id) => async (dispatch) => {
    const response = await fetch(`/api/likes/users/${id}`)
    
    if (response.ok) {
        const { likes } = await response.json();
        return likes.length;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const removeLike = (id) => async (dispatch) => {
    const response = await fetch(`/api/likes/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const { like } = await response.json();
        const recipeResponse = await fetch(`/api/recipes/${like.recipe_id}`);
        const recipe = await recipeResponse.json();
        await dispatch(addLike(recipe));
        return like;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const createLike = (payload) => async (dispatch) => {
    const response = await fetch(`/api/likes/recipes/${payload.recipe_id}`, {
        method: 'POST',
    });

    if (response.ok) {
        const like = await response.json();
        const recipeResponse = await fetch(`/api/recipes/${payload.recipe_id}`);
        const recipe = await recipeResponse.json();
        await dispatch(addLike(recipe));
        return like;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// like state will contain all likes from the current logged in user
// [recipeId]: like
export default function reducer(state = {}, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_LIKES:
            action.likes.forEach(like => {
                newState[like.recipe_id] = like;
            });
            return newState;
        default:
            return newState;
    }
}