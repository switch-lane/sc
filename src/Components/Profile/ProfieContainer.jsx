import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
debugger
        let userId =  this.props.match.params.userId
        if (!userId) {userId = '2'}

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {

            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}
// прокидываем props из state для этой компоненты
const mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile

    }
}
// между ProfileContainer и connect
let WithUrlDataProfileComponent = withRouter(ProfileContainer)

//ProfileContainer делает грязную работу по запросу на сервер,
//а connect работает со стором
export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataProfileComponent)
