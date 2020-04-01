import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

//принимает на вход компоненту, обертывыет в контейнерную комп-ту и возвращает эту конт. комп-ту
export const withAuthRedirect = (Component) => {

    let AuthRedirectContainerComponent = (props) => {
        if (!props.isAuth) {return <Redirect to={'/login'}/>}
        return <Component {...props}/>
    };
    let AuthRedirectContainerComponentWithState = connect(mapStateToPropsForRedirect) (AuthRedirectContainerComponent);

    return AuthRedirectContainerComponentWithState
};


