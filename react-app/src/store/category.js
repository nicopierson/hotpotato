const SET_ALL_CATEGORIES = 'recipes/categories';

const setCategories = (categories) => ({
  type: SET_ALL_CATEGORIES,
  categories,
});

export const setAllCategories = () => async (dispatch) => {
  const response = await fetch('/api/recipes/categories')
  const { categories } = await response.json();

  if (response.ok) {
      await dispatch(setCategories(categories));
      return response;
  } else {
      return ['An error occurred. Please try again.']
  }
}

const initialState = {
  categories:null,
};

export default function reducer(state = initialState, action) {
    let newState = {
      ...state,
    }
    switch (action.type) {
        case SET_ALL_CATEGORIES:
            newState.categories =  action.categories;
            return newState;
        default:
            return state;
    }
}
