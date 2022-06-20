import React from "react";

const AddNote = ({ note, onSubmitClick }) => {
  const onClick = (e) => {
    if (note.length !== 0) {
      e.preventDefault();
      onSubmitClick();
    }
  };

  return (
    <div className="row mt-4 text-center">
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={onClick}>
          Add Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
