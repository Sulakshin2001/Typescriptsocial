import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Mainbar from "./Components/Mainbar/Mainbar";



function App() {
    return (
        <div className="App">
            <Header/>
            <Profile/>
            <Mainbar/>
        </div>
    );
}

export default App;
