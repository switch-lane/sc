import React, {Component} from 'react';
import './App.css';
import Nav from "./Components/Nav/Nav";
import ProfileContainer from "./Components/Profile/ProfieContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
//import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunkCreator} from "./Components/Redux/app-reducer";
import preloader from "./assets/images/6.gif";
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        //this.props.getAuthUserDataThunkCreator()
        this.props.initializeAppThunkCreator()
    }

    render() {

        if (!this.props.initialized) {
            return <img src={preloader} />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>

                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    {/*<Route path='/dialogs' render={() => <DialogsContainer/>}/>*/}

                    <Route path='/dialogs' render={() =>
                        <React.Suspense fallback={<div>Loading...</div>}>
                        <DialogsContainer />
                    </React.Suspense>}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>


                </div>

                <Nav/>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let Composed = compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunkCreator,})
)(App);

export default Composed
