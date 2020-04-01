import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utilites/validators/validators";


const Dialogs = (props) => {

    /// key={key.id} ???
    let DialogObj = props.MessagesPage.DialogsData.map((key) => <DialogItem name={key.name} id={key.id}/>);
    let MesObj = props.MessagesPage.MessagesData.map((key) => <Message text={key.text}/>);

    ////
    let newMessElement = React.createRef();

    // let onAddMess = () => {
    //     // let text = newPostElement.current.value;
    //     // props.dispatch(addMessageActionCreator());
    //     // props.addPost()
    //     props.AddMess()
    //     // props.updateNewPostText('')
    // };


    // let onMessChange = () => {
    //
    //     let text = newMessElement.current.value;
    //     // props.dispatch(onMessageChangeActionCreator(text))
    //     props.onMessChange(text)
    //
    //     // props.updateNewPostText(text)
    // };


    //набранный текст хранится в стейте redux-form
    let addNewMessage = (formData) => {
        props.AddMess(formData.newMessageText)
    }

    // if (!props.isAuth) {return <Redirect to={'/login'}/>}


    return (

        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {DialogObj}
            </div>

            <div className={classes.messages}>
                <div>{MesObj}</div>

                <AddMessageReduxForm onSubmit={addNewMessage}/>

            </div>

        </div>
    );
};


let maxLength = maxLengthCreator(10)

const AddMessageForm = (props) => {
    return (<div>
            <div>

                {/*<textarea onChange={onMessChange} ref={newMessElement} value={props.MessagesPage.newMessageText}/>*/}
                <form onSubmit={props.handleSubmit}>
                    <Field component={Textarea} name={'newMessageText'} placeholder={'Default message from redux-form'} validate={[required, maxLength]}/>
                    <div>
                        <button>Add Message</button>
                    </div>
                </form>

            </div>
            <div>
                {/*<button onClick={onAddMess}>Add Message</button>*/}



            </div>
        </div>

    )
}

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)



export default Dialogs