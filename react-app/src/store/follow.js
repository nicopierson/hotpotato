const SET_FOLLOW = 'follows/setFollow';
const SET_ALL_FOLLOWS = 'follows/setAllFollows';
const DELETE_FOLLOW = 'follows/deleteFollow';
const ADD_FOLLOW = 'follows/addFollow';

const setFollow = (follow) => ({
    type: SET_FOLLOW,
    follow,
});

const setAllFollows = (follows) => ({
    type: SET_ALL_FOLLOWS,
    follows,
});

const deleteAFollow = (id) => ({
    type: DELETE_FOLLOW,
    followId: id,
});

const addFollow = (follow) => ({
    type: ADD_FOLLOW,
    follow,
});

export const getFollow = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/${id}`);
    const data = await response.json();

    if (response.ok) {
        await dispatch(setFollow(data));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getAllFollows = () => async (dispatch) => {
    const response = await fetch('/api/follows')
    const data = await response.json();

    if (response.ok) {
        await dispatch(setAllFollows(data));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// TODO Test State
export const deleteFollow = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        await dispatch(deleteAFollow(id));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// TODO Test State
export const createFollow = (payload) => async (dispatch) => {
    const response = await fetch(`/api/follows`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload }),
    });

    if (response.ok) {
        const follow = await response.json();
        await dispatch(addFollow(follow));
        return follow;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export default function reducer(state = {}, action) {
    let newState = {}
    switch (action.type) {
        case SET_FOLLOW:
            newState = { ...state };
            newState[action.follow.id] = action.follow;
            return newState;
        case SET_ALL_FOLLOWS:
            action.follows.follows.forEach(follow => {
                newState[follow.id] = follow;
            });
            return { ...state, ...newState };
        case ADD_FOLLOW:
            newState = { ...state };
            if (!state[action.follow.id]) {
                newState = { ...state, [action.follow.id]: action.follow };
            }
            return newState;
        case DELETE_FOLLOW:
            newState = { ...state };
            delete newState[action.followId];
            return newState;
        default:
            return state;
    }
}