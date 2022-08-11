import { usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'



let initialState = {
    posts: [
        { id: 1, message: 'Hi, my name is Ars', likesCount: 7 },
        { id: 2, message: "It's my first post", likesCount: 6 },
        { id: 3, message: 'I learn React 3-th day', likesCount: 47 },
        { id: 4, message: 'Я будущий миллионер', likesCount: 87237 },
    ],

    newPostText: "More money",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }       
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }       
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }       
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setStatus = (status) => ({ type: SET_STATUS, status })




export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
}



export default profileReducer;