import {createSelector} from "reselect";


export const getUsersSelector = (state) => {
    return state.usersPage.users
};

// вся сложная логика должна находится в селекторе, созданном через createSelector
// render в этом случае не вызывается постоянно, т.к. суперселектор сначала обращается к своему кэшу и проверяет
// произошли ли изменения в передаваемом объекте
export const getUsersSelectorSuper = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
});


export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
};
export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
};
export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
};
export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
};
export const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
};

