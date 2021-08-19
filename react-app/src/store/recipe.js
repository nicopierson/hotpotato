export const SET_RECIPE = 'recipes/setRecipe';
const SET_ALL_RECIPES = 'recipes/setAllRecipes';
const DELETE_RECIPE = 'recipes/deleteRecipe';
const ADD_RECIPE = 'recipes/addRecipe';
const EDIT_RECIPE = 'recipes/editRecipe';

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

const editRecipe = (recipe) => ({
    type: EDIT_RECIPE,
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

// TODO Test State
export const updateRecipe = (payload) => async(dispatch) => {
    const response = await fetch(`/api/recipes/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const recipe = await response.json();
        await dispatch(editRecipe(recipe));
        return recipe;
    } else {
        return ['An error occurred. Please try again.']
    }
}

const initialState = {
    single_recipe:null,
    all_recipes:null,
};
export default function reducer(state = initialState, action) {
    let newState = {...state}
    switch (action.type) {
        case SET_RECIPE:
            newState.single_recipe = action.recipe;
            return newState;
        case SET_ALL_RECIPES:
            newState.all_recipes = action.recipes
            return newState;
        case ADD_RECIPE:
            if (!state[action.recipe.id]) {
                newState = { ...state, [action.recipe.id]: action.recipe };
            }
            return newState;
        case EDIT_RECIPE:
            newState[action.recipe.id] = action.recipe;
            return newState;
        case DELETE_RECIPE:
            delete newState[action.recipeId];
            return newState;
        default:
            return state;
    }
}
