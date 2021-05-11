import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchResults from "../components/Searchresults/";
import SaveBtn from "../components/SaveBtn/";

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
          window.location.reload();
        }
        setBookList(res.data.items);
        console.log(res.data.items);
      })
      .catch((err) => setUserSearch("something went wrong"));
  }

  function saveBook() {
    console.log("test");
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
          <div className="row">
            <h3 className="ml-3">Results:</h3>
            {bookList.map((book) => (
              <div className="col-12">
                <SearchResults
                  key={book.id}
                  link={book.volumeInfo.infoLink}
                  image={book.volumeInfo.imageLinks.smallThumbnail}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  synop={book.volumeInfo.description}
                />
                <SaveBtn onClick={() => saveBook(book)} />
              </div>
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
