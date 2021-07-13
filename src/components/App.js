import React, { useState } from "react";
import video from "../data/video.js";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);

  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);

    function thumbsUp(){
      setLikes((like) => like += 1);
    }

    function thumbsDown(){
      setDislikes((dislike) => dislike += 1)
    }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <div>
      <button onClick={thumbsUp}>👍{likes}</button>
      <button onClick={thumbsDown}>👎{dislikes}</button>
      </div>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
