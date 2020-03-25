import React from "react";
import {connect} from "react-redux";
import {
    follow, followThunk, getUsersThunkCreator, getUsersThunkCreatorPageChanged,
    setCurrentPage, setTotalUsersCount, setUsers,
    toggleFollowingProgress, toggleIsFetching,
    unfollow, unfollowThunk
} from "../Redux/user-reducer";
import Users from "./Users";
import preloader from '../../assets/images/6.gif'
import {usersAPI} from "../../api/api";

// контейнерная компонента для AJAX запроса на сервер
class UsersAPIComponent extends React.Component {


    componentDidMount() {
    //перенесен в thunk
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)


        // this.props.toggleIsFetching(true)
        // //вынесено в api
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //
        //     .then((data) => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        //
        // });
    }
    // все методы яв-ся стрелочными ф-ми для сохранения контекста вызова
    onPageChanged = (pageNumber) => {
        //перенесен в thunk
        this.props.getUsersThunkCreatorPageChanged(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        // //вынесено в api
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
        //     .then((data) => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        //
        // });
    }
    render() {


        return <>

            {this.props.isFetching ? <img src={preloader} /> : null}

            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollowThunk={this.props.unfollowThunk}
                   followThunk={this.props.followThunk}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   />

        </>

    }

};

// контейнерная компонента для связи со store
const mapStateToProps = (state) => {


    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         // передаем callback follow в компоненту, ком-та вызывает его и передает пар-тр userid,
//         // затем вызываем АС с этим же пар-ом и диспатчим этот объект в state
//         follow: (userid) => {
//             dispatch(followAC(userid))
//         },
//         unfollow: (userid) => {
//             dispatch(unfollowAC(userid))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// };


const UsersContainer = connect(mapStateToProps, {
    // передаем callback follow в компоненту, ком-та вызывает его и передает пар-тр userid,
    // затем вызываем АС с этим же пар-ом и диспатчим этот объект в state
    followThunk,
    unfollowThunk,
    setCurrentPage,
    toggleFollowingProgress,
    toggleIsFetching,
    setUsers,
    setTotalUsersCount,
    getUsersThunkCreator,
    getUsersThunkCreatorPageChanged


})(UsersAPIComponent);

export default UsersContainer