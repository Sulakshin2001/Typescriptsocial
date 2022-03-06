import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Mainbar from "./Components/Mainbar/Mainbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type AppProps={
    MypoststArray:any,
    MessageData:any,
    NamesData:any
}
function App(props:AppProps) {


    return (
        <BrowserRouter>
            <div className="App">

                <Header/>
                <Profile/>
                <div className="content">


                    <Route path="/dialogs" render={() => <Dialogs NamesData={props.NamesData} MessageData={props.MessageData}/>}/>
                    <Route path="/profile" render={() => <Mainbar MypoststArray={props.MypoststArray}/>}/>


                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
