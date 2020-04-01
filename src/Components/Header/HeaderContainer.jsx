import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {getAuthUserDataThunkCreator, getLogoutThunkCreator, setAuthUserData} from '../Redux/auth-reducer'
import {connect} from "react-redux";





// response.data - это метод axios
//response.data.data - обращение к объекту с сервера
class HeaderContainer extends React.Component {
    componentDidMount() {
    //перенесен в thunk
    //     this.props.getAuthUserDataThunkCreator()

    //вынесено в api
    //     headerAPI.getAuthUserData()
    //     // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    //         .then(response => {
    //
    //         if (response.data.resultCode === 0) {
    //             let {id, login, email} = response.data.data;
    //             this.props.setAuthUserData(id, login, email)
    //         }
    //     })
    }

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