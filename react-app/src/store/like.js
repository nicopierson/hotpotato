import { SET_RECIPE } from "./recipe";
const SET_LIKES = 'likes/SET_LIKES';
const ADD_LIKE = 'likes/ADD_LIKE';
const DELETE_LIKE = 'likes/DELETE_LIKE';

// Set recipe and update full recipe details to store when deleting or adding like
const addRecipe = (recipe) => ({
    type: SET_RECIPE,
    recipe,
});

const setLikes = (likes) => ({
    type: SET_LIKES,
    likes,
});

const addLike = (like) => ({
    type: ADD_LIKE,
    like,
});

const deleteLike = (id) => ({
    type: DELETE_LIKE,
    recipe_id: id,
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

        await dispatch(deleteLike(like.recipe_id))
        const recipeResponse = await fetch(`/api/recipes/${like.recipe_id}`);
        const recipe = await recipeResponse.json();
        await dispatch(addRecipe(recipe));
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
        const { like } = await response.json();

        const recipeResponse = await fetch(`/api/recipes/${payload.recipe_id}`);
        const recipe = await recipeResponse.json();
        await dispatch(addRecipe(recipe));
        // load all likes after updating recipe
        await dispatch(loadLikes(payload.user_id))
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
        case ADD_LIKE:
            newState[action.recipe_id] = action.like;
            return newState;
        case DELETE_LIKE:
            delete newState[action.recipe_id];
            return newState;
        default:
            return newState;
    }
}