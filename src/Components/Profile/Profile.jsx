import React from "react";
import './Profile.module.css';
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>

            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status}  updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
            {/*посты видны только владельцу*/}
            {props.isOwner && <MyPostsContainer/>}

        </div>
    )
};
export default Profile