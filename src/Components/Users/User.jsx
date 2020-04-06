import {NavLink} from "react-router-dom";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-icon.png";
import React from "react";

const User = (props) => {

    return (<div key={props.user.id}>

                <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                        <img className={classes.usersPhoto} src={

                            props.user.photos.small != null ? props.user.photos.small : userPhoto

                        } alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            props.user.followed ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                    //вынесено в api
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    //     withCredentials: true,
                                    //     headers: {'API-KEY':'5cf4903e-57bb-48e6-bfa5-8d21e3653b58'}
                                    // })

                                    props.unfollowThunk(props.user.id)

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

                                : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                    //вынесено в api
                                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    //     withCredentials: true,
                                    //     headers: {'API-KEY':'5cf4903e-57bb-48e6-bfa5-8d21e3653b58'}
                                    // })

                                    props.followThunk(props.user.id)

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
                            <div>{props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </span>
    </div>)
}

export default User