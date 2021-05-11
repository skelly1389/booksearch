import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchResults from "../components/Searchresults/";
import { propTypes } from "react-bootstrap/esm/Image";

function Search() {
  const [userSearch, setUserSearch] = useState(" ");
  const [bookList, setBookList] = useState([]);
  // const [book, setBook] = useState({});

  function handleInputChange(event) {
    setUserSearch(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.searchBooks(userSearch)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setBookList(res.data.items);
        console.log(res.data.items);
      })
      .catch((err) => setUserSearch("something went wrong"));
  }

  return (
    <div>
      <form className="search">
        <div className="form-group">
          <label htmlFor="books">Book Search</label>
          <input
            value={userSearch}
            onChange={handleInputChange}
            name="booksearch"
            type="text"
            className="form-control"
            placeholder="Look for some books bro"
            id="booksearch"
          />
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="btn btn-success"
          >
            Search
          </button>
        </div>
      </form>
      <div>
        {bookList.length ? (
          <div>
            {bookList.map((book) => (
              <SearchResults 
                link={book.volumeInfo.infoLink}
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                synop={book.volumeInfo.description}
              />
            ))}
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  );
}

export default Search;
