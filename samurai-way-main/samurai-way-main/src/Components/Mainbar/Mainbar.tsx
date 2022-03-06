import React from "react";
import s from "./Mainbar.module.css";
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
type MainbarProps={
    MypoststArray:any
}
const Mainbar = (props:MainbarProps) =>{

    return(
    <div className={s.Mainbar} >

        <ProfileInfo/>
      <Myposts MypoststArray={props.MypoststArray}/>
    </div>
    )}
export default Mainbar;