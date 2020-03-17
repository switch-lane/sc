import React from "react";
import './Profile.module.css';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import SuperMyPostsContainer from "./MyPosts/MyPostsContainer"



const Profile = (props) => {
    return (
        <div>
            Main content
            <ProfileInfo/>
            {/*<MyPostsContainer store={props.store}/>*/}
            {/*<MyPostsContainer/>*/}
            <SuperMyPostsContainer/>


        </div>
    )
}
export default Profile