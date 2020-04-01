import {profileAPI} from "../../api/api";

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET-USER-PROFILE';
let SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    PostsData: [
        {id: 1, text: 'Its my first post', likes: 24},
        {id: 2, text: 'Hello, hi are you?', likes: 3},
        {id: 3, text: 'Yo!', likes: 3}
    ],
    newPostText: 'default :)',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                // text: state.newPostText,
                text: action.body,
                likes: 80
            };
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                newPostText: ''
            };
            // stateCopy.PostsData = [...state.PostsData];
            // stateCopy.PostsData.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     return {...state, newPostText: action.newText};
            // stateCopy.newPostText = action.newText;
            // return stateCopy
        //}
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }

        }

        default:
            return state;
    }
};

// const profileReducer = (state = initialState, action) => {
//     if (action.type === ADD_POST) {
//         let newPost = {
//             id: 4,
//             text: state.newPostText,
//             likes: 80
//         };
//         let stateCopy = {...state};
//         stateCopy.PostsData = {...state.PostsData};
//         stateCopy.PostsData.push(newPost);
//         stateCopy.newPostText = '';
//         return stateCopy
//
//
//
//     } else if (action.type === UPDATE_NEW_POST_TEXT) {
//         let stateCopy = {...state};
//         stateCopy.newPostText = {...state.newPostText};
//         stateCopy.newPostText = action.newText;
//         return stateCopy
//
//     } else return state
// };


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, body: newPostText});

export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status: status});

//THUNKS:

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {

        // if (!userId) {
        //     userId = '2'
        // }

        profileAPI.getUserProfile(userId)
        //вынесено в api
        //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
};

export const getUserStatusThunkCreator = (userid) => {
    return (dispatch) => {
        profileAPI.getStatus(userid)
            .then(response => {
                dispatch(setUserStatus(response.data))
            })
    }
};

export const updateUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.getUpdateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
};


export default profileReducer