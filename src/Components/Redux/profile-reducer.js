let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostsData: [
        {id: 1, text: 'Its my first post', likes: 24},
        {id: 2, text: 'Hello, hi are you?', likes: 3},
        {id: 3, text: 'Yo!', likes: 3}
    ],
    newPostText: 'default :)'
};

const profileReducer = (state = initialState, action) => {
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