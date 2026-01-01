import React from "react";
import "./index.css";

export default function Navbar({ setShowModal }) {
  return (
    <div className="navBar">
      <h3 className="logo">Logo</h3>
      <ul className="navList">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <button className="loginBtn Btn" onClick={() => setShowModal(true)}>
          Create Post
        </button>
        {/* <button className="signupBtn Btn" onClick={() => setShowModal(true)}>
          Sign Up
        </button> */}
      </div>
    </div>
  );
}
