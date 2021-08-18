import { SET_RECIPE } from "./recipe";

// Set recipe to update when deleting or adding like
const addLike= (recipe) => ({
    type: SET_RECIPE,
    recipe,
});

export const getAllLikes = () => async (dispatch) => {
    const response = await fetch('/api/likes')
    const likes = await response.json();

    if (response.ok) {
        return likes;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getNumberLikes = () => async (dispatch) => {
    const response = await fetch('/api/likes')
    const { likes } = await response.json();

    if (response.ok) {
        return likes.length();
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const removeLike = (id) => async (dispatch) => {
    const response = await fetch(`/api/likes/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const like = await response.json();
        const recipeResponse = await fetch(`/api/recipes/${like.like.recipe_id}`);
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
