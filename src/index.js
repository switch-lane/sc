import React from "react";
import "./index.css";
import ReactDOM from "react-dom"
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, HashRouter} from "react-router-dom";
import store from "./Components/Redux/redux-store";
import './index.css';
import {Provider} from "react-redux";

//по умолчанию
// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </BrowserRouter>, document.getElementById('root'));

//для github pages
ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root'));

window.store = store;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


