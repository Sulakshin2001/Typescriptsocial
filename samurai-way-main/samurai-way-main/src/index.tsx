import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let MypoststArray=[
    {message:"how are you",Likecounts:"12likes"},
    {message:"its me",Likecounts:"13 likes"},
    {message:"nikita",Likecounts:"14 likes"},
]
let NamesData = [
    {id: 1, names: 'Nikita'},
    {id: 2, names: 'Vanya'},
    {id: 3, names: 'Slava'},
    {id: 4, names: 'Kolya'}
]
let MessageData = [
    {id: 1, message: 'Hy'},
    {id: 2, message: 'Its me'},
    {id: 3, message: 'Mario'},
    {id: 4, message: 'Kolya'}
]
ReactDOM.render(
    <App MypoststArray={MypoststArray} NamesData={NamesData} MessageData={MessageData}/>,
  document.getElementById('root')
);