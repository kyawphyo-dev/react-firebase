import React from "react";
import "./index.css";
import { useState } from "react";

export default function Index({ addPost }) {
  let [status, setStatus] = useState("upcoming");
  let [title, setTitle] = useState("");
  let clear = () => {
    setTitle("");
  };
  let update_post = (e) => {
    e.preventDefault();
    let post = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      status: status,
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
          <input
            type="text"
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="dropped">Dropped</option>
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
          </select>
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
