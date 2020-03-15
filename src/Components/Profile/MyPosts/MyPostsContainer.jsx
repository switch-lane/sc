import React from "react";
import {addPostActionCreator} from "../../Redux/profile-reducer"
import {onPostChangeActionCreator} from "../../Redux/profile-reducer"
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let AddPostCont = () => {
        props.store.dispatch(addPostActionCreator());
    };


    let onPostChangeCont = (text) => {
        let action = onPostChangeActionCreator(text)
        props.store.dispatch(action)
    };

    return (<MyPosts addPost={AddPostCont}
                     updateNewPostText={onPostChangeCont}
                     PostsData={props.store.getState().ProfilePage.PostsData}
                     newPostText={props.store.getState().ProfilePage.newPostText} />)
};
export default MyPostsContainer