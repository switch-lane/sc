let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 4,
            text: state.newPostText,
            likes: 80
        };

        state.PostsData.push(newPost);
        state.newPostText = '';


    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;

    }
    return state
};


export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});



export default profileReducer