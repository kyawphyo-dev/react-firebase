import React from "react";
import "./index.css";

export default function Index({ posts }) {
  return (
    <div className="postListContainer">
      <h2 className="title">Post List</h2>
      <div className="postList">
        {posts.map((post) => (
          <div key={post.id} className="postItem">
            <h3>{post.title}</h3>
            <span className="status">{post.status}</span>
            {/* <button onClick={() => deletePost(post.id)}>Delete</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
