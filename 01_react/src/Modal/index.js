import React from "react";
import "./index.css";
import ReactDOM from "react-dom";

export default function Modal({ children, danger = false, setShowModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "5px solid",
          borderColor: danger ? "red" : "green",
        }}
      >
        {children}
        <button
          type="button"
          className="closeBtn Btn"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
