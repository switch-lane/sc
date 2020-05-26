import React from "react";
import classes from './News.module.css'
import {withAuthRedirect} from "../Hoc/withAuthRedirect";

const News = (props) => {
    if (!props.isAuth) {return }
    return (
        <div>
            News
        </div>

    )
}

export default withAuthRedirect(News)