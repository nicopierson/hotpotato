const SET_RECIPE = 'recipes/setRecipe';
const SET_ALL_RECIPES = 'recipes/setAllRecipes';

const setRecipe = (recipe) => ({
    type: SET_RECIPE,
    recipe,
});

const setAllRecipes = (recipes) => ({
    type: SET_ALL_RECIPES,
    recipes,
})

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

export default function reducer(state = {}, action) {
    let newState = {}
    switch (action.type) {
        case SET_RECIPE:
            newState = { ...state };
            newState[action.recipe.id] = action.recipe;
            return newState;
        case SET_ALL_RECIPES:
            newState = {}
            action.recipes.recipes.forEach(recipe => {
                newState[recipe.id] = recipe;
            });
            return { ...state, ...newState };
        default:
            return state;
    }
}