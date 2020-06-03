import React from "react";
import {connect} from "react-redux";
import {
    followThunk, getUsersThunkCreator, getUsersThunkCreatorPageChanged,
    setCurrentPage, setTotalUsersCount, setUsers,
    toggleFollowingProgress, toggleIsFetching, unfollowThunk
} from "../Redux/user-reducer";
import Users from "./Users";
import preloader from '../../assets/images/6.gif'
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector, getUsersSelectorSuper
} from "../Redux/user-selectors";
import classes from './Users.module.css'

// контейнерная компонента для AJAX запроса на сервер
class UsersAPIComponent extends React.Component {

    //выполняется сразу после render() и сообщается, что можно делать запрос на сервер
    componentDidMount() {
        //перенесен в thunk
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    // все методы яв-ся стрелочными ф-ми для сохранения контекста вызова
    onPageChanged = (pageNumber) => {
        //перенесен в thunk
        this.props.getUsersThunkCreatorPageChanged(pageNumber, this.props.pageSize)
    }

    render() {
        return <>

            {this.props.isFetching ? <img className={classes.preloader} src={preloader}/> : null}

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
}


const mapStateToProps = (state) => {
//selectors:
    return {
        users: getUsersSelectorSuper(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }

};

let Composed = compose(
    connect(mapStateToProps, {
        followThunk,
        unfollowThunk,
        setCurrentPage,
        toggleFollowingProgress,
        toggleIsFetching,
        setUsers,
        setTotalUsersCount,
        getUsersThunkCreator,
        getUsersThunkCreatorPageChanged
    }),
    //withAuthRedirect
)(UsersAPIComponent);


export default Composed