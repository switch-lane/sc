import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-icon.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";



const Users = (props) => {

    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages = [];
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i)
    // }

    return <div>

        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

        {/*<div className={classes.pageNums}>*/}
        {/*    {pages.map(p => {*/}
        {/*        return <span className={props.currentPage === p && classes.selectedPage}*/}
        {/*                     onClick={() => {*/}
        {/*                         props.onPageChanged(p)*/}
        {/*                     }}>{p}</span>*/}
        {/*    })}*/}
        {/*</div>*/}

        <div>
        {props.users.map((u) => <User followThunk={props.followThunk}
                                      unfollowThunk={props.unfollowThunk}
                                      followingInProgress={props.followingInProgress}
                                      followed={props.followed} user={u} key={u.id}/>)

        }
        </div>
    </div>
};
export default Users