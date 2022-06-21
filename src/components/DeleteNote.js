import React from "react";

const DeleteNote = ({ onNoteDeletion }) => {
  return (
    <button className="btn btn-danger ms-3" onClick={onNoteDeletion}>
      Close
    </button>
  );
};

export default DeleteNote;
