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

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                text: state.newPostText,
                likes: 80
            };
            return  {...state,
                PostsData: [...state.PostsData, newPost],
                newPostText: ''};
            // stateCopy.PostsData = [...state.PostsData];
            // stateCopy.PostsData.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
            // stateCopy.newPostText = action.newText;
            // return stateCopy
        }
        default:
            return state;
    }
};

// const profileReducer = (state = initialState, action) => {
//     if (action.type === ADD_POST) {
//         let newPost = {
//             id: 4,
//             text: state.newPostText,
//             likes: 80
//         };
//         let stateCopy = {...state};
//         stateCopy.PostsData = {...state.PostsData};
//         stateCopy.PostsData.push(newPost);
//         stateCopy.newPostText = '';
//         return stateCopy
//
//
//
//     } else if (action.type === UPDATE_NEW_POST_TEXT) {
//         let stateCopy = {...state};
//         stateCopy.newPostText = {...state.newPostText};
//         stateCopy.newPostText = action.newText;
//         return stateCopy
//
//     } else return state
// };


export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});



export default profileReducer