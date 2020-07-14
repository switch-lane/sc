import classes from '../Dialogs.module.css'
import React from "react";

type propsType = {
    text: string
}

const Message: React.FC<propsType> = (props) => {
    return (

            <div className={classes.message}>
                {props.text}

            </div>

    )
};
export default Message