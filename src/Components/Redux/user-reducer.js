const FOLLOW ='FOLLOW';
const UNFOLLOW = 'UNFOLLW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING ';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true
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
        default: return state;
    }
};

export const follow = (userid) => ({type: FOLLOW, userid});
export const unfollow = (userid) => ({type: UNFOLLOW, userid});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, page: currentPage});
// export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: TOTAL_USERS_COUNT, count: totalCount});
export const  toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, toggle: isFetching});


export default usersReducer