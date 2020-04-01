import React from "react";
import {connect} from "react-redux";
import {getLoginThunkCreator, getLogoutThunkCreator} from "../Redux/auth-reducer";
import Login from "./Login";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getLoginThunkCreator, getLogoutThunkCreator})(Login)