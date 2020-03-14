import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {


    return (
        <div className='app-wrapper'>
            <Header/>
            {/*<Profile/>*/}
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile ProfilePage={props.state.ProfilePage} dispatch={props.dispatch}/>}/>
                <Route path='/dialogs' render={() => <Dialogs MessagesPage={props.state.MessagesPage} dispatch={props.dispatch}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

            </div>

            <Nav/>
        </div>

    );
};

export default App;
