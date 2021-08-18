const SET_FOLLOWING = 'follows/setFollowing';
const SET_ALL_FOLLOWERS = 'follows/setAllFollowers';
const SET_ALL_FOLLOWINGS = 'follows/setAllFollowings';
const DELETE_FOLLOWING = 'follows/deleteFollowing';
const ADD_FOLLOWING = 'follows/addFollowing';

const setFollowing = (user) => ({
    type: SET_FOLLOWING,
    user,
});

const setAllFollowers = (users) => ({
    type: SET_ALL_FOLLOWERS,
    users,
});

const setAllFollowings = (users) => ({
    type: SET_ALL_FOLLOWINGS,
    users,
});

const deleteFollowing = (id) => ({
    type: DELETE_FOLLOWING,
    id,
});

const addFollowing = (user) => ({
    type: ADD_FOLLOWING,
    user,
});

export const getFollowing = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/followings/${id}`);
    const data = await response.json();

    if (response.ok) {
        await dispatch(setFollowing(data));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getAllFollowers = () => async (dispatch) => {
    const response = await fetch('/api/follows')
    const data = await response.json();

    if (response.ok) {
        await dispatch(setAllFollowers(data));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getAllFollowings = () => async (dispatch) => {
    const response = await fetch('/api/follows')
    const data = await response.json();

    if (response.ok) {
        await dispatch(setAllFollowings(data));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// TODO Test State
export const removeFollowing = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/users/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        await dispatch(deleteFollowing(id));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// TODO Test State
export const createFollowing = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/users/${id}`, {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ payload }),
    });

    if (response.ok) {
        const follow = await response.json();
        await dispatch(addFollowing(follow));
        return follow;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// should look like this "followers": { [1]: User1, [2]: User2 }, "following": { [1]: User2 }
const initialState = { "followers": {}, "following": {} };

export default function reducer(state = initialState, action) {
    let newState = {}
    switch (action.type) {
        case SET_FOLLOWING:
            newState = { ...state.followers, ...state.following };
            newState.following[action.user.id] = action.user;
            return newState;
        case SET_ALL_FOLLOWERS:
            newState = { ...state.following, ...state.followers };
            action.users.forEach(user => {
                newState.followers[user.id] = user;
            });
            return newState;
        case SET_ALL_FOLLOWINGS:
            newState = { ...state.following, ...state.followers };
            action.users.forEach(user => {
                newState.followings[user.id] = user;
            });
            return newState;
        case ADD_FOLLOWING:
            newState = { ...state.followers, ...state.following };
            if (!state.followings[action.user.id]) {
                newState.followings[action.user.id] = action.user;
            }
            return newState;
        case DELETE_FOLLOWING:
            newState = { ...state.followers, ...state.following };
            delete newState.following[action.id];
            return newState;
        default:
            return state;
    }
}