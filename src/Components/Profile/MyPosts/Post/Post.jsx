import React from "react";
import classes from './Post.module.css'
import likePic from "../../../../assets/images/likev1.png";
import userPhoto from "../../../../assets/images/user-icon.png"

const Post = (props) => {


    return (
        
            <div className={classes.item}>


                {/*если нет фото, отображается пустота, нужно дописать условие*/}
                <img src={props.profile.photos.small || userPhoto} alt=""/>

                <b>{props.profile.fullName}</b><br/>

                <div className={classes.textMessage}>{props.message}</div>

                <div className={classes.like}><img src={likePic}/>{props.likes}</div>

            </div>

    )
}
export default Post