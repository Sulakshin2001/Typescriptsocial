import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Mainbar from "./Components/Mainbar/Mainbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Profile/>
            <div className="content">

                    <Route path="/dialogs" component = {Dialogs}/>
                    <Route path="/profile" component = {Mainbar}/>


                </div>


        </div>
        </BrowserRouter>
    );
}

export default App;
