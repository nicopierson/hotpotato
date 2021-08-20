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
    const user = await response.json();

    if (response.ok) {
        await dispatch(setProfile(user));
        return response;
    } else {
        return ['An error occurred. Please try again.']
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