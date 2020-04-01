import React from "react";
import {onMessageChangeActionCreator, addMessageActionCreator } from "../Redux/message-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

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
        AddMess: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        },
        // onMessChange: (text) => {
        //     dispatch(onMessageChangeActionCreator(text))
        // }
    }
};
//перенесенов hoc
// let AuthRedirectContainerComponent = (props) => {
//     if (!props.isAuth) {return <Redirect to={'/login'}/>}
//     return <Dialogs {...props}/>
// };


//start -- перенесенов compose
// let AuthRedirectContainerComponentWithState = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainerComponentWithState)
//end

let Composed = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

//export default DialogsContainer
export default Composed
