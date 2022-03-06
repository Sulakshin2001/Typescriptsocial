import React from "react";
import Post from "./Post/Post";

type MypostsProps = {
    MypoststArray: Array<Type>;
}
type Type = {
    message: string;
    Likecounts: string;
}


const Myposts = (props: MypostsProps) => {
    let mypostelement = props.MypoststArray.map((ob) => {
        return (
            <Post messege={ob.message} Likecounts={ob.Likecounts}/>
        )
    })
    return (
        <div>

            <textarea></textarea>
            <button> Add post</button>
            {mypostelement}


        </div>
    )
}
export default Myposts

