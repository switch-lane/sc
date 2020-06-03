import { addMessage } from "../Redux/message-reducer"
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

let Composed = compose(
    connect(mapStateToProps, {addMessage, reset}),
    withAuthRedirect
)(Dialogs);

export default Composed
