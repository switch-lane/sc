import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

// let renderEntireTree = () => {
//     console.log('State was changed')
// };

let store = {
    _callSubscriber() {
        console.log('no subscribers (observers)');
    },
    _state: {
        MessagesPage: {
            MessagesData: [
                {id: 1, text: 'Hello!'},
                {id: 2, text: 'How your learning!'},
                {id: 3, text: 'Yo!'}
            ],
            newMessageText: 'Message default :D',

            DialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Misha'},
                {id: 6, name: 'Katya'}
            ]
        },
        ProfilePage: {
            PostsData: [
                {id: 1, text: 'Its my first post', likes: 24},
                {id: 2, text: 'Hello, hi are you?', likes: 3},
                {id: 3, text: 'Yo!', likes: 3}
            ],
            newPostText: 'default :)'
        },
        sidebar: {}

    },
    subscribe(observer) {
        this._callSubscriber = observer //переопределяет ф-ю снаружи (1ая строка)
    },
    getState() {
        return this._state;
    },

    dispatch(action) { //{type: 'ADD-POST}

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.MessagesPage = messageReducer(this._state.MessagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 4,
        //         text: this._state.ProfilePage.newPostText,
        //         likes: 80
        //     };
        //
        //     this._state.ProfilePage.PostsData.push(newPost);
        //     this._state.ProfilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        //
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.ProfilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        //
        // } else if (action.type === SEND_MESSAGE) {
        //     let newMessage = {
        //         id: 4,
        //         text: this._state.MessagesPage.newMessageText
        //     };
        //     this._state.MessagesPage.MessagesData.push(newMessage);
        //     this._state.MessagesPage.newMessageText = '';
        //     this._callSubscriber(this._state);
        //
        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.MessagesPage.newMessageText = action.newMText;
        //     this._callSubscriber(this._state);
        // }
    },
};
///// up
// export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
//
// export const onMessageChangeActionCreator = (text) => ({
//     type: UPDATE_NEW_MESSAGE_TEXT,
//     newMText: text
// });
//
// ///// down
//
// export const addPostActionCreator = () => ({type: ADD_POST});
//
// export const onPostChangeActionCreator = (text) => ({
//         type: UPDATE_NEW_POST_TEXT,
//         newText: text
// });



export default store














// let store = {
//     _callSubscriber() {
//         console.log('no subscribers (observers)');
//     },
//     _state: {
//         MessagesPage: {
//             MessagesData: [
//                 {id: 1, text: 'Hello!'},
//                 {id: 2, text: 'How your learning!'},
//                 {id: 3, text: 'Yo!'}
//             ],
//             DialogsData: [
//                 {id: 1, name: 'Dima'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Valera'},
//                 {id: 5, name: 'Misha'},
//                 {id: 6, name: 'Katya'}
//             ]
//         },
//         ProfilePage: {
//             PostsData: [
//                 {id: 1, text: 'Its my first post', likes: 24},
//                 {id: 2, text: 'Hello, hi are you?', likes: 3},
//                 {id: 3, text: 'Yo!', likes: 3}
//             ],
//             newPostText: 'default :)'
//         }
//
//     },
//     addPost() {
//
//         let newPost = {
//             id: 4,
//             text: this._state.ProfilePage.newPostText,
//             likes: 80
//         };
//
//         this._state.ProfilePage.PostsData.push(newPost);
//         this._state.ProfilePage.newPostText = '';
//         this._callSubscriber(this._state);
//     },
//     updateNewPostText(newText) {
//         this._state.ProfilePage.newPostText = newText;
//         this._callSubscriber(this._state);
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer //переопределяет ф-ю снаружи (1ая строка)
//     },
//     getState() {
//         return this._state;
//     }
// };
//
// export default store