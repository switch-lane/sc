import React from "react";
import classes from './Music.module.css'
import {withAuthRedirect} from "../Hoc/withAuthRedirect";

const Music = () => {
    return (
        <div>
            Music
        </div>
    )
}

export default withAuthRedirect(Music)