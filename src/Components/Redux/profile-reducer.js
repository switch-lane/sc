import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

let ADD_POST = 'profile/ADD-POST';
let SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
let SET_USER_STATUS = 'profile/SET-USER-STATUS';
let DELETE_POST = 'profile/DELETE-POST';
let PHOTO_IS_SAVED = 'profile/PHOTO-IS-SAVED';

let initialState = {
    PostsData: [
        {id: 1, text: 'Its my first post', likes: 24},
        {id: 2, text: 'Hello, hi are you?', likes: 3},
        {id: 3, text: 'Yo!', likes: 3}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                text: action.body,
                likes: 80
            };
            return {
                ...state,
                PostsData: [newPost, ...state.PostsData,],

            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }
        case DELETE_POST: {
            return {
                ...state,
                PostsData: state.PostsData.filter(p => p.id != action.postId)
            }
        }
        case PHOTO_IS_SAVED: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photoFile }

            }
        }

        default:
            return state;
    }
};



export const addPost = (newPostText) => ({type: ADD_POST, body: newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status: status});
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccessful = (photoFile) => ({type: PHOTO_IS_SAVED, photoFile})

//THUNKS:

export const getUserProfileThunkCreator = (userId) =>
    async (dispatch) => {

        let response = await profileAPI.getUserProfile(userId)
                dispatch(setUserProfile(response.data))

    }

export const getUserStatusThunkCreator = (userid) =>
    async (dispatch) => {
       let response = await profileAPI.getStatus(userid)
                dispatch(setUserStatus(response.data))

    }


export const updateUserStatusThunkCreator = (status) =>
    async (dispatch) => {
    try {
        let response = await profileAPI.getUpdateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    } catch (error) {
        // 1.dispatch
        // 2.alert
        }
    }

export const savePhotoThunkCreator = (file) =>
    async (dispatch) => {
    let response = await profileAPI.getPhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccessful(response.data.data.photos))
        }

    }

export const saveProfileThunkCreator = (profile) =>

    async (dispatch, getState) => {

    //в рамках одного редьюсера есть возможность обращатсья к другим редьюсерам
    //и к глобальному стейту
        try {
            let userId = getState().auth.userId
            let response = await profileAPI.saveProfile(profile)

            if (response.data.resultCode === 0) {
                dispatch(getUserProfileThunkCreator(userId))
            } else {
                dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
                // для выделения конкретного поля
                //dispatch(stopSubmit('edit-profile', {"contacts": {"facebook": response.data.messages[0]}}))
                return Promise.reject(response.data.messages[0])
            }
        }
        catch (error) {
            // 1.dispatch
            // 2.alert
        }

    }

export default profileReducer