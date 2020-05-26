import React, {useEffect, useState} from "react";
import classes from './ProfileStatus.module.css'


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusThunkCreator(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }


        return (
            <div>

                {!editMode &&
                <div>
                    <span onDoubleClick={props.isOwner ? activateEditMode : null} className={classes.status} >
                        {props.status || 'no status'}
                    </span>
                </div>}

                {editMode &&
                <div>
                    <input onBlur={deActivateEditMode} onChange={onStatusChange} autoFocus={true} value={status}/>
                </div>}

            </div>
        )

}

export default ProfileStatusWithHooks