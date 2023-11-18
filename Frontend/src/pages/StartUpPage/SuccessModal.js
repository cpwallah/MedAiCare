import React from "react";

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Success!</h2>
        <p>Login successful.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
