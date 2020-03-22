import React from "react";
import './Profile.module.css';
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            Main content
            <ProfileInfo profile={props.profile} />
            {/*<MyPostsContainer store={props.store}/>*/}
            <MyPostsContainer/>


        </div>
    )
};
export default Profile