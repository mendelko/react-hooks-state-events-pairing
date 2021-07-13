import React from "react";
import video from "../data/video.js";
import Likes from "./Likes";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);


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
      <Likes upvotes={video.upvotes} downvotes={video.downvotes}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
