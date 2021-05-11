import React from "react";

function SearchResults(props) {
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
          <a href={props.link} className="btn btn-primary">
            Buy Me!
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
