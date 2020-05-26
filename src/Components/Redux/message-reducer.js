let SEND_MESSAGE = 'dialogs/SEND-MESSAGE';


let initialState = {
    MessagesData: [
        {id: 1, text: 'Hello!'},
        {id: 2, text: 'How your learning!'},
        {id: 3, text: 'Yo!'}
    ],
    DialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Katya'}
    ]
};

const messageReducer = (state = initialState, action) => {

    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 4,
            text: action.body

        };
        return  {...state,
            MessagesData: [...state.MessagesData, newMessage]};

    } else return state
};


export const addMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, body: newMessageText});

export default messageReducer

