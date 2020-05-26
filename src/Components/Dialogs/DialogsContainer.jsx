import React from "react";
import { addMessageActionCreator } from "../Redux/message-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";
import {reset} from 'redux-form';


const mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage,

    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        AddMess: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        },
        resetForm: (form) => {
            dispatch(reset(form))
        }
    }
};


let Composed = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default Composed
