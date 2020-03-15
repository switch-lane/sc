import React from "react";
import './Profile.module.css';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div>
            Main content
            <ProfileInfo/>

            {/*<MyPosts PostsData={props.ProfilePage.PostsData} dispatch={props.dispatch} newPostText={props.ProfilePage.newPostText}/>*/}
            <MyPostsContainer store={props.store}/>

        </div>
    )
}
export default Profile