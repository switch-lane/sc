import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilites/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";





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

    //набранный текст хранится в стейте redux-form
    let addNewPost = (formData) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={classes.posts}>
            <h3>My Posts</h3>

            <AddPostReduxForm onSubmit={addNewPost}/>
            <div>
                New Post
            </div>
            <div className={classes.mes}>
                {PostObj}
            </div>

        </div>
    )
};

let maxLength = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (<div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    {/*<textarea ref={newPostElement}></textarea>*/}
                    {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>*/}
                    <Field component={Textarea} name={'newPostText'} placeholder={'default -_- from redux-form'} validate={[required, maxLength]}/>
                </div>
                <div>
                    {/*<button onClick={onAddPost}>Add post</button>*/}
                    <button>Add post</button>
                </div>
            </form>
        </div>
    )
}



const AddPostReduxForm = reduxForm({form: 'AddPostForm'})(AddPostForm)

export default MyPosts