import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import cn from 'classnames'


const DialogItem = (props) => {
    return (
        
        <div className={cn(classes.dialogsItems, classes.active)}>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/stormtrooper-1-617497.png" alt=""/>
            <NavLink to={'/dialogs/' + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
};
export default DialogItem