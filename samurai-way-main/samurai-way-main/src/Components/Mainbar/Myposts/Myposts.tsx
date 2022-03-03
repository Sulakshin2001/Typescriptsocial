import React from "react";
import Post from "./Post/Post";


const Myposts = () => {
    return (
        <div>

            <textarea></textarea>
            <button> Add post</button>
            <Post message={'how are you'} Likecounts={'12 likes'}/>
            <Post message={'its me'} Likecounts={'13 likes'}/>
            <Post message={'nikita'} Likecounts={'14 likes'}/>


        </div>
    )
}
export default Myposts

