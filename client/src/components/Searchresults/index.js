import React from "react";

function SearchResults(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
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
