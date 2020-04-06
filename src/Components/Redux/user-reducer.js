import {usersAPI} from "../../api/api";

const FOLLOW ='FOLLOW';
const UNFOLLOW = 'UNFOLLW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING ';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'
const fake = 'fake'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 'fake'
};
let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map((key) => {
                        if (key.id === action.userid) {
                            return {...key, followed: true} // возвращем копию объекта user[?], 'followed:' затираем
                        }
                        return key
                    }
                )
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((key) => {
                        if (key.id === action.userid) {
                            return {...key, followed: false}
                        }
                        return key
                    }
                )
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        } case SET_CURRENT_PAGE: {
            return {
                ...state,
                 currentPage: action.page
                //currentPage: action.currentPage
            }
        } case TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        } case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.toggle

            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {

            return {
                ...state,
                followingInProgress: action.statusProgress
                ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        // case fake: return {...state, fake: state.fake + 1}
        default: return state;
    }
};

export const follow = (userid) => ({type: FOLLOW, userid});
export const unfollow = (userid) => ({type: UNFOLLOW, userid});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, page: currentPage});
// export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: TOTAL_USERS_COUNT, count: totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, toggle: isFetching});
export const toggleFollowingProgress = (statusProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, statusProgress, userId})

//THUNKS:
export const getUsersThunkCreator = (currentPage, pageSize) => {
    //currentPage, pageSize замыкаются в thunk
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        //вынесено в api
        let data = await usersAPI.getUsers(currentPage, pageSize)
            // .then((data) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))

    }
}


export const getUsersThunkCreatorPageChanged = (pageNumber, pageSize) =>
    //currentPage, pageSize замыкаются в thunk
    async (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(toggleIsFetching(true))

        let data = await usersAPI.getUsers(pageNumber, pageSize)
        //вынесено в api
        //     .then((data) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items));

    }


export const unfollowThunk = (userId) =>
    //currentPage, pageSize замыкаются в thunk
    async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))

        let response = await usersAPI.getFollow(userId)
            // .then(response => {

                if (response.data.resultCode == 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
    }


export const followThunk = (userId) =>
    //currentPage, pageSize замыкаются в thunk
    async (dispatch) => {
       dispatch( toggleFollowingProgress(true, userId))
        let response= await usersAPI.getUnfollow(userId)
            // .then(response => {

                if (response.data.resultCode == 0) {
                    dispatch(follow(userId))
                }
               dispatch( toggleFollowingProgress(false, userId))

    }

export default usersReducer