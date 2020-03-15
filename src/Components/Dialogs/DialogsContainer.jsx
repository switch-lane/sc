import React from "react";
import {onMessageChangeActionCreator, addMessageActionCreator } from "../Redux/message-reducer"
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let AddMessCont = () => {
        props.store.dispatch(addMessageActionCreator());
    };


    let onMessChangeCont = (text) => {
        let action = onMessageChangeActionCreator(text);
        props.store.dispatch(action)
    };


    return (<Dialogs AddMess={AddMessCont}
                     onMessChange={onMessChangeCont}
                     // DialogsData={props.store.getState().MessagesPage.DialogsData}
                     MessagesPage={props.store.getState().MessagesPage}/>)
};

export default DialogsContainer