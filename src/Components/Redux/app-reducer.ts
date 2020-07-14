import {getAuthUserDataThunkCreator} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "./redux-store";

const INITIALIZED_SUCCESSFUL= 'app/INITIALIZED-SUCCESSFUL';


let initialState: initialStateType = {
    initialized: false
};
type initialStateType = {
    initialized: boolean
}

let appReducer = (state = initialState, action: actionsTypes): initialStateType => {
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
type actionsTypes = initializedSuccessfulType
type initializedSuccessfulType = {type: typeof INITIALIZED_SUCCESSFUL}

export const initializedSuccessful = (): initializedSuccessfulType => ({type: INITIALIZED_SUCCESSFUL})



//THUNKS:
type thunksType = ThunkAction<Promise<void>, appStateType, unknown, actionsTypes>

export const initializeAppThunkCreator = () => (dispatch: any) => {
        //dispatch может возвращать то, что возвращает ф-я,
        //которую он вызывает
        let dispatchResult = dispatch(getAuthUserDataThunkCreator());

        Promise.all([dispatchResult])
            .then(() => {

            dispatch(initializedSuccessful())
        })

    }

export default appReducer