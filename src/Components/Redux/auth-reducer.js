import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false

};
let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            };
        default:
            return state;

    }
}

export const setAuthUserData = (userId, login, email, isAuth) => {
    return {type: SET_USER_DATA, payload: {userId, login, email, isAuth}}
};

//THUNKS:

export const getAuthUserDataThunkCreator = () => (dispatch) => {
        //второй return возвращает вызов thunkcreator'а наоружу (в dispatchResult)
        return  authAPI.getAuthUserData()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })


    }

export const getLoginThunkCreator = (email, password, rememberMe) => {

    return (dispatch) => {


        authAPI.getLogin(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "unknown error"

                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }

}

export const getLogoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.getLoginout()
            .then(response => {
                dispatch(setAuthUserData(null, null, null, false))
            })
    }
}

export default authReducer