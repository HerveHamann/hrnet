import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Modal = ({ setModalShowed }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Employee Created!</h2>
        <button onClick={() => setModalShowed()}>{<FontAwesomeIcon icon={faXmark} />}</button>
      </div>
    </div>
  );
};

export default Modal;
