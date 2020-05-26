import React from "react";
import classes from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";



const Users = (props) => {


    return <div>

        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

        <div className={classes.usersIcons}>
        {props.users.map((u) => <User followThunk={props.followThunk}
                                      unfollowThunk={props.unfollowThunk}
                                      followingInProgress={props.followingInProgress}
                                      followed={props.followed} user={u} key={u.id}/>)
        }
        </div>
    </div>
};
export default Users