import React from "react";
import "./index.css";

export default function Index({ posts }) {
  return (
    <div className="postListContainer">
      <h2 className="title">Post List</h2>

      <div className="postList">
        {posts.map((post) => (
          <div key={post.id} className="postItem">
            <h5>{post.title}</h5>
            {/* <button onClick={() => deletePost(post.id)}>Delete</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
