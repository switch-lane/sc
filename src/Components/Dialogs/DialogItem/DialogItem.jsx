import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";


const DialogItem = (props) => {
    return (
        
        <div className={`${classes.dialogsItems} ${classes.active}`}>
            <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png" alt=""/>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
};
export default DialogItem