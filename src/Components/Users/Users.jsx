import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-icon.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";


const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    ;


    return <div>
        <div className={classes.pageNums}>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {props.users.map((u) => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={classes.usersPhoto} src={

                            u.photos.small != null ? u.photos.small : userPhoto

                        } alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {


                                    //вынесено в api
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    //     withCredentials: true,
                                    //     headers: {'API-KEY':'5cf4903e-57bb-48e6-bfa5-8d21e3653b58'}
                                    // })

                                    props.unfollowThunk(u.id)

                                    // props.toggleFollowingProgress(true, u.id)
                                    //
                                    // usersAPI.getFollow(u.id)
                                    //     .then(response => {
                                    //
                                    //         if (response.data.resultCode == 0) {
                                    //             props.unfollow(u.id)
                                    //         }
                                    //         props.toggleFollowingProgress(false, u.id)
                                    //
                                    //     });



                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    //вынесено в api
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    //     withCredentials: true,
                                    //     headers: {'API-KEY':'5cf4903e-57bb-48e6-bfa5-8d21e3653b58'}
                                    // })

                                    props.followThunk(u.id)

                                    // props.toggleFollowingProgress(true, u.id)
                                    // usersAPI.getUnfollow(u.id)
                                    //     .then(response => {
                                    //
                                    //         if (response.data.resultCode == 0) {
                                    //             props.follow(u.id)
                                    //         }
                                    //         props.toggleFollowingProgress(false, u.id)
                                    //
                                    //     });



                                }}>Follow</button>

                        }
                    </div>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </span>
        </div>)

        }
    </div>
};
export default Users