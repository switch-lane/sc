let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 4,
            text: state.newMessageText
        };
        state.MessagesData.push(newMessage);
        state.newMessageText = '';


    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMText;

    }
    return state
};

export const addMessageActionCreator = () => ({type: SEND_MESSAGE});

export const onMessageChangeActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMText: text
});



export default messageReducer

