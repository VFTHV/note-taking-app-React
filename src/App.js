import React from "react";
import Note from "./components/Note";

class App extends React.Component {
  constructor() {
    super();
    this.state = { allNotes: ["Note"] };
  }

  onNoteAddition = (note) => {
    const newNotes = [...this.state.allNotes];
    newNotes.push(note);
    this.setState({ allNotes: newNotes });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="fw-bold text-center">Note Taker</h1>
          <p className="text-center fw-bold fs-4 text-success">
            Add A New Note:
          </p>
        </div>

        <Note onNoteAddition={this.onNoteAddition} />

        <div className="row">
          {this.state.allNotes.map((note, index, array) => {
            return (
              <div
                key={index}
                className={`${array.length === 1 ? "col" : "col-sm-6"} mt-2`}
              >
                <div className="card">
                  <div className="card-header">Note {index + 1}</div>
                  <div className="card-body">
                    <p className="card-text">{note}</p>
                    <button className="btn btn-primary">View Detail</button>
                    <button className="btn btn-primary">View Detail</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
