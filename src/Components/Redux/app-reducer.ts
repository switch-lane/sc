import {getAuthUserDataThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESSFUL= 'app/INITIALIZED-SUCCESSFUL';


let initialState: initialStateType = {
    initialized: false
};
type initialStateType = {
    initialized: boolean
}

let appReducer = (state = initialState, action: any): initialStateType => {
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
type initializedSuccessfulType = {type: typeof INITIALIZED_SUCCESSFUL}
export const initializedSuccessful = (): initializedSuccessfulType => ({type: INITIALIZED_SUCCESSFUL})


//THUNKS:

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