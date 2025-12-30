import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import PostList from "./components/postList/PostList";
import Modal from "./Modal/index";
import PostForm from "./components/postForm/index";

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ]);
  let [showModal, setShowModal] = useState(false);
  let addPost = (post) => {
    setPosts((prevState) => [...prevState, post]);
    setShowModal(false);
  };
  // let deletePost = (id) => {
  //   setPosts((prevState) => prevState.filter((post) => post.id !== id));
  // };

  return (
    <>
      <Navbar setShowModal={setShowModal} />
      <PostList posts={posts} />
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <PostForm addPost={addPost} />
        </Modal>
      )}
    </>
  );
}

export default App;
