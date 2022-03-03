import React from "react";
import { NavLink } from "react-router-dom";
import s from './Profile.module.css'

const Profile =() =>{
    return(
        <div className={s.profile}>
            <div><NavLink to='/profile'>Profile</NavLink></div>
            <div><NavLink to='/dialogs'>Messages</NavLink></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
        </div>
    )
}
export default Profile;