import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserDataThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESSFUL= 'INITIALIZED-SUCCESSFUL';


let initialState = {
    initialized: false
};

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFUL:
            return {
                ...state,
                initialized: true

            };
        default:
            return state;

    }
};

export const initializedSuccessful = () => ({type: INITIALIZED_SUCCESSFUL})


//THUNKS:

export const initializeAppThunkCreator = () => (dispatch) => {
        //dispatch может возвращать то, что возвращает ф-я,
        //которую он вызывает
        let dispatchResult = dispatch(getAuthUserDataThunkCreator());

        Promise.all([dispatchResult])
            .then(() => {

            dispatch(initializedSuccessful())
        })

    }

export default appReducer