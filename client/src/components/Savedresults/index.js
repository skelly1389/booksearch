import React from "react";
import DeleteBtn from "../DeleteBtn/";

function SavedResults(props) {
  return (
    <div key={props.key} className="row">
      <img className="col-3" src={props.image} alt={props.title + " cover"} />
      <div className="card col-9" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {props.authors.map((authors) => (
            <p>{authors}</p>
          ))}
          <p className="card-text">{props.synop}</p>
          <a href={props.link} className="btn btn-primary mr-3">
            Buy Me!
          </a>
          <DeleteBtn
           onClick={props.onClick} />
        </div>
      </div>
    </div>
  );
}

export default SavedResults;