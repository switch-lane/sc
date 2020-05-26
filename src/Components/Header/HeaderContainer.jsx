import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {getAuthUserDataThunkCreator, getLogoutThunkCreator, setAuthUserData} from '../Redux/auth-reducer'
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {

    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};
export default connect(mapStateToProps, {setAuthUserData, getAuthUserDataThunkCreator, getLogoutThunkCreator}) (HeaderContainer)