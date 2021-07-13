import React, { useState } from "react";

function Comments({ comments }){
    const [isShowing, setIsShowing] = useState(true)

    function handleShowingComments(){
        setIsShowing((isShowing) => !isShowing)
    }

    const displayComments = comments.map((comment) => {
        return (
            <div>
              <h3>{comment.user}</h3> 
              {comment.comment}
            </div>
        )
    })

    return (
        <div>
            <div>
                <button onClick={handleShowingComments}>
                    {isShowing ? "Hide Comments" : "Show Comments"}
                </button>
            </div>
            <h2>{comments.length} Comments</h2>
            {isShowing ? displayComments : null}
        </div>
    )

}

export default Comments;