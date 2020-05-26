import React from "react";
import classes from './Settings.module.css'
import {withAuthRedirect} from "../Hoc/withAuthRedirect";

const Settings = () => {
    return (
        <div>
            Settings
        </div>

    )
}
export default withAuthRedirect(Settings)