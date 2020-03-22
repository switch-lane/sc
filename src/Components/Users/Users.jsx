import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user-icon.png";
import {NavLink} from "react-router-dom";

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
                            u.followed ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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