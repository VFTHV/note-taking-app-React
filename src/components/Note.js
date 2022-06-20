import React, { useState } from "react";
import AddNote from "./AddNote";

const Note = ({ onNoteAddition }) => {
  const [note, setNote] = useState("");

  const onSubmitClick = () => {
    onNoteAddition(note);
    setNote("");
  };

  return (
    <form>
      <div className="row">
        <div className="col-auto">
          <label htmlFor="new-note" className="form-label fw-bold fs-4">
            Note:
          </label>
        </div>
        <div className="col">
          <textarea
            className="form-control"
            id="new-note"
            rows="2"
            placeholder="Write your note here"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
          ></textarea>
        </div>
      </div>
      <AddNote note={note} onSubmitClick={onSubmitClick} />
    </form>
  );
};

export default Note;
