const SET_RECIPE = 'recipes/setRecipe';
const SET_ALL_RECIPES = 'recipes/setAllRecipes';
const DELETE_RECIPE = 'recipes/deleteRecipe';
const ADD_RECIPE = 'recipes/addRecipe';

const setRecipe = (recipe) => ({
    type: SET_RECIPE,
    recipe,
});

const setAllRecipes = (recipes) => ({
    type: SET_ALL_RECIPES,
    recipes,
});

const deleteARecipe = (id) => ({
    type: DELETE_RECIPE,
    recipeId: id,
});

const addRecipe = (recipe) => ({
    type: ADD_RECIPE,
    recipe,
});

export const getRecipe = (id) => async (dispatch) => {
    const response = await fetch(`/api/recipes/${id}`);
    const data = await response.json();

    if (response.ok) {
        await dispatch(setRecipe(data));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getAllRecipes = () => async (dispatch) => {
    const response = await fetch('/api/recipes')
    const data = await response.json();

    if (response.ok) {
        await dispatch(setAllRecipes(data));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// TODO Test State
export const deleteRecipe = (id) => async (dispatch) => {
    const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        await dispatch(deleteARecipe(id));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// TODO Test State
export const createRecipe = (payload) => async (dispatch) => {
    const response = await fetch(`/api/recipes/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( payload ),
    });

    if (response.ok) {
        const recipe = await response.json();
        await dispatch(addRecipe(recipe));
        return recipe;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export default function reducer(state = {}, action) {
    let newState = {}
    switch (action.type) {
        case SET_RECIPE:
            newState = { ...state };
            newState[action.recipe.id] = action.recipe;
            return newState;
        case SET_ALL_RECIPES:
            action.recipes.recipes.forEach(recipe => {
                newState[recipe.id] = recipe;
            });
            return { ...state, ...newState };
        case ADD_RECIPE:
            newState = { ...state };
            if (!state[action.recipe.id]) {
                newState = { ...state, [action.recipe.id]: action.recipe };
            }
            return newState;
        case DELETE_RECIPE:
            newState = { ...state };
            delete newState[action.recipeId];
            return newState;
        default:
            return state;
    }
}
