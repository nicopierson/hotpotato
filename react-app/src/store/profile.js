import { getAllRecipesForGivenUser } from "./recipe";
import { setUser } from "./session";

const SET_PROFILE = 'follows/setProfile';

const setProfile = (user) => ({
    type: SET_PROFILE,
    user,
});

export const getProfile = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`)
    const user = await response.json();

    if (response.ok) {
        await dispatch(setProfile(user));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const updateProfile = (payload) => async (dispatch) => {
    const response = await fetch(`/api/users/${payload.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const user = await response.json();
        await dispatch(setProfile(user));
        await dispatch(getAllRecipesForGivenUser(user.id));
        await dispatch(setUser(user));
        return { 'id': user.id };
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    } else {
        return {'errors': [ {'field': 'server', 'message': 'An error occurred. Please try again.'} ]};
    }

}

const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case SET_PROFILE:
            newState[action.user.id] = action.user;
            return newState;
        default:
            return state;
    }
}