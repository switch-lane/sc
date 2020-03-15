import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = (props) => {

    let PostObj = props.PostsData.map((key) => <Post message={key.text} likes={key.likes}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        // let text = newPostElement.current.value;
        // props.dispatch(addPostActionCreator());
        props.addPost()
        // props.updateNewPostText('')
    };


    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.dispatch(onPostChangeActionCreator(text))
        props.updateNewPostText(text)
    };

    return (
        <div className={classes.posts}>
            <h3>My Posts</h3>

            <div>
                {/*<textarea ref={newPostElement}></textarea>*/}
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                New Post
            </div>
            <div className={classes.mes}>
                {PostObj}
            </div>

        </div>
    )
};
export default MyPosts