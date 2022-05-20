import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Modal = ({ setModalShowed }) => {
  const CloseModal = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) setModalShowed(false);
  };
  return (
    <div className="modal-container" onClick={(e) => CloseModal(e)}>
      <div className="modal">
        <h2>Employee Created!</h2>
        <button onClick={() => setModalShowed(false)}>{<FontAwesomeIcon icon={faXmark} />}</button>
      </div>
    </div>
  );
};

export default Modal;
