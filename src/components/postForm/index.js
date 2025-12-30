import React from "react";
import "./index.css";
// import { useState } from "react";
import { useRef } from "react";

export default function Index({ addPost }) {
  // let [title, setTitle] = useState("");
  let title = useRef();
  let clear = () => {
    title.current.value = "";
  };
  let update_post = (e) => {
    e.preventDefault();
    let post = {
      id: Math.floor(Math.random() * 10000),
      title: title.current.value,
    };
    addPost(post);
    clear();
  };
  return (
    <div className="post-form">
      <form onSubmit={update_post}>
        <h3>Create Post</h3>
        <div className="form-control">
          <label>Title</label>
          <input type="text" placeholder="Enter title" ref={title} />
        </div>
        <div className="form-control">
          <button type="submit" className="Btn">
            Post Now
          </button>
        </div>
      </form>
    </div>
  );
}
