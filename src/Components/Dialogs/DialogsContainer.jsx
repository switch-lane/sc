import React from "react";
import {onMessageChangeActionCreator, addMessageActionCreator } from "../Redux/message-reducer"
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//
//             let AddMessCont = () => {
//                 store.dispatch(addMessageActionCreator());
//             };
//
//
//             let onMessChangeCont = (text) => {
//                 let action = onMessageChangeActionCreator(text);
//                 store.dispatch(action)
//             };
//
//             return <Dialogs AddMess={AddMessCont}
//                             onMessChange={onMessChangeCont}
//                             MessagesPage={store.getState().MessagesPage}/>
//
//         }
//         }
//     </StoreContext.Consumer>
//
// };

const mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        AddMess: () => {
            dispatch(addMessageActionCreator())
        },
        onMessChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
};

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default SuperDialogsContainer
// export default DialogsContainer