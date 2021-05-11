import React from "react";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h3>Google Books</h3>
        <a className="navbar-brand ml-2 mr-2" href="/">
          Search
        </a>
        <a className="navbar-brand" href="/saved">
          Saved
        </a>
      </nav>
      <div className="p-5 text-center bg-light">
        <h1 className="mb-3">(React) Google Books Search</h1>
        <h4 className="mb-3">Search and Save Books of Interest</h4>
      </div>
    </div>
  );
}

export default Nav;
