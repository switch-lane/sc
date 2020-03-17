let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};
//// В message-reducer сделано через switch!
const messageReducer = (state = initialState, action) => {
    let stateCopy;
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 4,
            text: state.newMessageText
        };
        return  {...state,
            newMessageText: '',
            MessagesData: [...state.MessagesData, newMessage]};
        // stateCopy.MessagesData = [...state.MessagesData];
        // stateCopy.MessagesData.push(newMessage);
        // stateCopy.newMessageText = '';
        // return stateCopy


    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        return {...state, newMessageText: action.newMText};
        // stateCopy.newMessageText = action.newMText;
        // return stateCopy

    } else return state
};


// const messageReducer = (state = initialState, action) => {
//     if (action.type === SEND_MESSAGE) {
//         let newMessage = {
//             id: 4,
//             text: state.newMessageText
//         };
//
//         state.MessagesData.push(newMessage);
//         state.newMessageText = '';
//
//
//     } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
//         state.newMessageText = action.newMText;
//
//     }
//     return state
// };

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});

export const onMessageChangeActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMText: text
});



export default messageReducer

