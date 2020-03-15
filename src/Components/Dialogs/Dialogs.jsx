import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
///
import {onMessageChangeActionCreator, addMessageActionCreator } from "../Redux/message-reducer"
///

const Dialogs = (props) => {

    let DialogObj = props.MessagesPage.DialogsData.map((key) => <DialogItem name={key.name} id={key.id}/>);
    let MesObj = props.MessagesPage.MessagesData.map((key) => <Message text={key.text}/>);

    ////
    let newMessElement = React.createRef();

    let onAddMess = () => {
        // let text = newPostElement.current.value;
        // props.dispatch(addMessageActionCreator());
        // props.addPost()
        props.AddMess()
        // props.updateNewPostText('')
    };


    let onMessChange = () => {

        let text = newMessElement.current.value;
        // props.dispatch(onMessageChangeActionCreator(text))
        props.onMessChange(text)

        // props.updateNewPostText(text)
    };


    return (

        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {DialogObj}
            </div>

            <div className={classes.messages}>
                <div>{MesObj}</div>


                <div>
                    <div>

                        <textarea onChange={onMessChange} ref={newMessElement} value={props.MessagesPage.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onAddMess}>Add Message</button>
                    </div>
                </div>

            </div>

        </div>
    );
};


export default Dialogs