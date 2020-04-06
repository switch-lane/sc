import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, savePhotoThunkCreator,
    setUserProfile,
    updateUserStatusThunkCreator
} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {


    refreshProfile() {
        let userId =  this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId
            if (!userId) {
                //программный редирект на login
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)

    }

    //выполняется сразу после render() и сообщается, что можно делать запрос на сервер
    componentDidMount() {
        this.refreshProfile()

        // let userId =  this.props.match.params.userId
        // if (!userId) {userId = '2'}
        //
        // profileAPI.getUserProfile(userId)
        // //вынесено в api
        // //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //
        // .then(response => {
        //
        //     this.props.setUserProfile(response.data)
        // })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

        render() {


        return <Profile savePhoto={this.props.savePhotoThunkCreator} isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile} updateUserStatusThunkCreator={this.props.updateUserStatusThunkCreator}/>
    }
}
// прокидываем props из state для этой компоненты
const mapStateToProps = (state) => {

    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        authorisedUserId: state.auth.userId,
        isAuth: state.auth.isAuth


    }
};


//перенесенов hoc
// let AuthRedirectContainerComponent = (props) => {
//     if (!props.isAuth) {return <Redirect to={'/login'}/>}
//     return <ProfileContainer {...props}/>
// };

//let AuthRedirectContainerComponentWithState = withAuthRedirect(ProfileContainer)



// между ProfileContainer и connect

//let WithUrlDataProfileComponent = withRouter(AuthRedirectContainerComponentWithState)

//ProfileContainer делает грязную работу по запросу на сервер
//connect работает со стором
//export default connect(mapStateToProps, {setUserProfile, getUserProfileThunkCreator}) (WithUrlDataProfileComponent)

let Composed = compose(
    connect(mapStateToProps, {setUserProfile, getUserProfileThunkCreator, updateUserStatusThunkCreator, getUserStatusThunkCreator, savePhotoThunkCreator}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

export default Composed
