import { getProfile } from './profile';

const SET_ALL_FOLLOWERS = 'follows/setAllFollowers';
const SET_ALL_FOLLOWINGS = 'follows/setAllFollowings';
const DELETE_FOLLOWING = 'follows/deleteFollowing';
const ADD_FOLLOWING = 'follows/addFollowing';

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

export const getAllFollowers = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/followers/${id}`)
    const { followers } = await response.json();

    if (response.ok) {
        await dispatch(setAllFollowers(followers));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const getAllFollowings = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/followings/${id}`)
    const { followings } = await response.json();

    if (response.ok) {
        await dispatch(setAllFollowings(followings));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const removeFollowing = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/users/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        await dispatch(deleteFollowing(id));
        await dispatch(getProfile(id));
        return response;
    } else {
        return ['An error occurred. Please try again.']
    }
}

export const createFollowing = (id) => async (dispatch) => {
    const response = await fetch(`/api/follows/users/${id}`, {
        method: 'POST',
    });

    if (response.ok) {
        const { following } = await response.json();
        await dispatch(addFollowing(following));
        await dispatch(getProfile(id));
        return following;
    } else {
        return ['An error occurred. Please try again.']
    }
}

// should look like this "followers": { [1]: User1, [2]: User2 }, "following": { [1]: User2 }
const initialState = { "followers": {}, "followings": {} };

export default function reducer(state = initialState, action) {
    let newState = { 
        "followings": { ...state.followings },
        "followers": { ...state.followers } 
    };
    switch (action.type) {
        case SET_ALL_FOLLOWERS:
            action.users.forEach(user => {
                newState.followers[user.id] = user;
            });
            return newState;
        case SET_ALL_FOLLOWINGS:
            action.users.forEach(user => {
                newState.followings[user.id] = user;
            });
            return newState;
        case ADD_FOLLOWING:
            if (!state.followings[action.user.id]) {
                newState.followings[action.user.id] = action.user;
            }
            return newState;
        case DELETE_FOLLOWING:
            delete newState.followings[action.id];
            return newState;
        default:
            return state;
    }
}