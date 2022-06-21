import React from "react";

const ViewDetail = ({ index }) => {
  return (
    <button
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target={`#noteModal${index}`}
    >
      View Detail
    </button>
  );
};

export default ViewDetail;
