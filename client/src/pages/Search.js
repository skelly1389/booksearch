import React, { useState } from "react";
import API from "../utils/API";
import SearchResults from "../components/Searchresults/";

function Search() {
  const [userSearch, setUserSearch] = useState(" ");
  const [bookList, setBookList] = useState([]);

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
        setBookList(res.data);
        console.log(res.data);
      })
      .catch((err) => setUserSearch("something went wrong"));
  }

  function saveBook(id) {
    API.saveBook({
      link: id.volumeInfo.infoLink,
      image: id.volumeInfo.imageLinks.thumbnail,
      title: id.volumeInfo.title,
      authors: id.volumeInfo.authors,
      description: id.volumeInfo.description,
    });
    console.log(id)
  }

  return (
    <div>
      <h2 className="text-primary">Book Search</h2>
      <form className="search">
        <div className="form-group">
          <label htmlFor="books">Book:</label>
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
        {bookList.totalItems > 0 ? (
          <div className="row">
            <h3 className="ml-3">Results:</h3>
            {bookList.items.map((book) => (
              <div className="col-12">
                <SearchResults
                  key={book.id}
                  link={book.volumeInfo.infoLink}
                  image={book.volumeInfo.imageLinks.thumbnail} 
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  synop={book.volumeInfo.description}
                  onClick={() => saveBook(book)}
                />
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
