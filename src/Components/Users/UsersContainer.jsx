import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../Redux/user-reducer";
import * as axios from "axios";
import Users from "./Users";
import preloader from '../../assets/images/6.gif'

// контейнерная компонента для AJAX запроса на сервер
class UsersAPIComponent extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        });
    }
    // все методы яв-ся стрелочными ф-ми для сохранения контекста вызова
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);

        });
    }
    render() {

        return <>

            {this.props.isFetching ? <img src={preloader} /> : null}
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}/>

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
        isFetching: state.usersPage.isFetching
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
    follow,

    unfollow,

    setUsers,

    setCurrentPage,

    setTotalUsersCount,

    toggleIsFetching

})(UsersAPIComponent);

export default UsersContainer