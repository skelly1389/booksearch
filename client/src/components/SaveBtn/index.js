import React from "react";

function SaveBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      Save Me!
    </span>
  );
}

export default SaveBtn;