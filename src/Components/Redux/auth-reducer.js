import {authAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_SUCCESSFUL = 'auth/GET-CAPTCHA-SUCCESSFUL';


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null

};
let authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_SUCCESSFUL:
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
export const getCaptchaSuccessful = (captchaUrl) => ({type: GET_CAPTCHA_SUCCESSFUL, payload: {captchaUrl}})

//THUNKS:

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
        //второй return возвращает вызов thunkcreator'а наоружу
        let response = await  authAPI.getAuthUserData()

            //переделано на async await
            // .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, login, email, true))
                }
    }

export const getLoginThunkCreator = (email, password, rememberMe, captcha) =>

    async (dispatch) => {


        let response = await authAPI.getLogin(email, password, rememberMe, captcha)
            // .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator())
                } else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrlThunkCreator())
                    }
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "unknown error"

                    dispatch(stopSubmit('login', {_error: message}))
                }

    }


export const getLogoutThunkCreator = () =>
    async (dispatch) => {
        let response = await authAPI.getLoginout()
            // .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
    }


export const getCaptchaUrlThunkCreator = () =>

    async (dispatch) => {

    let response = await securityAPI.getCaptchaUrl()
        let captchaUrl = response.data.url

        dispatch(getCaptchaSuccessful(captchaUrl))
    }

export default authReducer