import React from "react";
import './Profile.module.css';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div>
            Main content
            <ProfileInfo/>

            <MyPosts PostsData={props.ProfilePage.PostsData} dispatch={props.dispatch} newPostText={props.ProfilePage.newPostText}/>

        </div>
    )
}
export default Profile