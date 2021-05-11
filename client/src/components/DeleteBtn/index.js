import React from "react";

function DeleteBtn(props) {
  return (
    <span className="delete-btn text-danger" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
