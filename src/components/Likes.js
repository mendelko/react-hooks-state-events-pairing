import React, { useState } from "react";

function Likes(props){
  const [likes, setLikes] = useState(props.upvotes);
  const [dislikes, setDislikes] = useState(props.downvotes);

    function thumbsUp(){
      setLikes((like) => like += 1);
    }

    function thumbsDown(){
      setDislikes((dislike) => dislike += 1)
    }

    return (
      <div>
        <button onClick={thumbsUp}>👍{likes}</button>
        <button onClick={thumbsDown}>👎{dislikes}</button>
      </div>
    )
}

export default Likes;