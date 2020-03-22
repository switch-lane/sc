import React from "react";
import {addPostActionCreator} from "../../Redux/profile-reducer"
import {onPostChangeActionCreator} from "../../Redux/profile-reducer"
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//
//             let AddPostCont = () => {
//                 store.dispatch(addPostActionCreator());
//             };
//
//
//             let onPostChangeCont = (text) => {
//                 let action = onPostChangeActionCreator(text)
//                 store.dispatch(action)
//             };
//
//             return <MyPosts addPost={AddPostCont}
//                             updateNewPostText={onPostChangeCont}
//                             PostsData={store.getState().ProfilePage.PostsData}
//                             newPostText={store.getState().ProfilePage.newPostText}/>
//         }
//         }
//     </StoreContext.Consumer>
//
// };

const mapStateToProps = (state) => {
    return {
        PostsData: state.ProfilePage.PostsData,
        newPostText: state.ProfilePage.newPostText
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text))
        }
    }
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
// export default MyPostsContainer
export default MyPostsContainer