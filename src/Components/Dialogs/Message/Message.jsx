import classes from '../Dialogs.module.css'
import React from "react";


const Message = (props) => {
    return (

            <div className={classes.message}>
                {props.text}

            </div>

    )
};
export default Message