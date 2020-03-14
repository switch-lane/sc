import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
    return (
        
            <div className={classes.item}>

                <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png" alt=""/>
                {props.message}

                <div><span>like</span></div> {props.likes}

            </div>

    )
}
export default Post