import {NavLink} from "react-router-dom";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-icon.png";
import React from "react";

const cities = ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Ekatirinburg', 'Vladivostok', 'Archangelsk', 'Samara', 'Sochi', 'Vladimir', 'Irkutsk'];

const random = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min))
}


const User = (props) => {

    return (<div className={classes.userIcons} key={props.user.id}>

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

                                    props.unfollowThunk(props.user.id)


                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {

                                    props.followThunk(props.user.id)


                                }}>Follow</button>
                        }
                    </div>
                    <span>
                        <span>
                            <div>{props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                        <span>
                            <div>{"Country: Russia"}</div>
                            <div>{"City: " + cities[random(0, 9)]}</div>
                        </span>
                    </span>
                </span>
    </div>)
}

export default User