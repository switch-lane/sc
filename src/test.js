//
// // let DialogsData = [
// //     {id:1, name:'Dima'},
// //     {id:2, name:'Andrey'},
// //     {id:3, name:'Sveta'},
// //     {id:4, name:'Valera'},
// //     {id:5, name:'Misha'},
// //     {id:6, name:'Katya'}
// // ];
// // let res = DialogsData.map( (key) => <DialogItem name={key.name} id={key.id}/>)
// // console.log(res)
//
// // let state = {
// //     MessagesPage: {
// //         MessagesData: [
// //             {id:1, text:'Hello!'},
// //             {id:2, text:'How your learning!'},
// //             {id:3, text:'Yo!'}
// //         ],
// //         DialogsData: [
// //             {id:1, name:'Dima'},
// //             {id:2, name:'Andrey'},
// //             {id:3, name:'Sveta'},
// //             {id:4, name:'Valera'},
// //             {id:5, name:'Misha'},
// //             {id:6, name:'Katya'}
// //         ]
// //     },
// //     ProfilePage: {
// //         PostsData: [
// //             {id:1, text:'Its my first post', likes: 24},
// //             {id:2, text:'Hello, hi are you?', likes: 3},
// //             {id:3, text:'Yo!', likes: 3}
// //         ],
// //         newPostText: 'default :)'
// //     }
// // };
// // console.log(state.PostsData)
//
// let store = {
//     _subscriber() {
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
//         let newPost = {
//             id: 4,
//             text: state.ProfilePage.newPostText,
//             likes: 80
//         };
//
//         state.ProfilePage.PostsData.push(newPost);
//         state.ProfilePage.newPostText = '';
//         renderEntireTree(state);
//     },
//     updateNewPostText() {
//         state.ProfilePage.newPostText = newText;
//         renderEntireTree(state);
//     },
//     subscribe(observer) {
//         renderEntireTree = observer //переопределяет ф-ю снаружи (1ая строка)
//     }
// };
//
//
//
//
//
//
//
// export const subscribe = (observer) => {
//     renderEntireTree = observer //переопределяет ф-ю снаружи (1ая строка)
// };
//
//
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._subscriber = observer;
//
//     },
//     setFirstName(value) {
//         this._state.firstName = value;
//         this._subscriber();
//     },
// };
// console.log(store.getState().MessagesPage)
// let state = {
//     MessagesPage: {
//         MessagesData: [
//             {id:1, text:'Hello!'},
//             {id:2, text:'How your learning!'},
//             {id:3, text:'Yo!'}
//         ],
//         DialogsData: [
//             {id:1, name:'Dima'},
//             {id:2, name:'Andrey'},
//             {id:3, name:'Sveta'},
//             {id:4, name:'Valera'},
//             {id:5, name:'Misha'},
//             {id:6, name:'Katya'}
//         ]
//     },
//     ProfilePage: {
//         PostsData: [
//             {id:1, text:'Its my first post', likes: 24},
//             {id:2, text:'Hello, hi are you?', likes: 3},
//             {id:3, text:'Yo!', likes: 3}
//         ],
//         newPostText: 'default :)'
//     }
// };
//
// // let renderPage = (s) => console.log(`hey hey! ${s} was changed!`);
//
// // console.log(store.getState())
// // console.log(store.setFirstName('Joe'))
// // console.log(store.getState())
//
// // store.subscribe(() => {
// //     let state = store.getState()
// //     console.log(state)
// //
// // });
// // store.setFirstName('Ron')
//




// function addPost(name='Joe') {
//
//     let newPost = {
//         id: 4,
//         text: this.id,
//         likes: 80
//     };
// }
// console.log(addPost.text)
    // console.log(this._state.ProfilePage.newPostText === addPost._state.ProfilePage.newPostText)