import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {photosType, postType, profileType} from "../../Types/types";

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
    ] as Array<postType>,
    profile: null as profileType | null,
    status: ''
};
type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {

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
                profile: {...state.profile, photos: action.photoFile } as profileType //temp. solution
            }
        }

        default:
            return state;
    }
};
type addPostType = {type: typeof ADD_POST, body: string}
type setUserProfileType = {type: typeof SET_USER_PROFILE, profile: profileType}
type setUserStatusType = {type: typeof SET_USER_STATUS, status: string}
type savePhotoSuccessfulType = {type: typeof PHOTO_IS_SAVED, photoFile: photosType}


export const addPost = (newPostText: string): addPostType => ({type: ADD_POST, body: newPostText});
export const setUserProfile = (profile: profileType): setUserProfileType => ({type: SET_USER_PROFILE, profile: profile});
export const setUserStatus = (status: string): setUserStatusType => ({type: SET_USER_STATUS, status: status});
export const deletePost = (postId: number) => ({type: DELETE_POST, postId})
export const savePhotoSuccessful = (photoFile: photosType): savePhotoSuccessfulType => ({type: PHOTO_IS_SAVED, photoFile})

//THUNKS:

export const getUserProfileThunkCreator = (userId: number) =>
    async (dispatch: any) => {

        let response = await profileAPI.getUserProfile(userId)
                dispatch(setUserProfile(response.data))

    }

export const getUserStatusThunkCreator = (userid: number) =>
    async (dispatch: any) => {
       let response = await profileAPI.getStatus(userid)
                dispatch(setUserStatus(response.data))

    }


export const updateUserStatusThunkCreator = (status: string) =>
    async (dispatch: any) => {
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

export const savePhotoThunkCreator = (file: any) =>
    async (dispatch: any) => {
    let response = await profileAPI.getPhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccessful(response.data.data.photos))
        }

    }

export const saveProfileThunkCreator = (profile: profileType) =>

    async (dispatch: any, getState: any) => {

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