import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedResults from "../components/Savedresults/";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks()
  }, []);

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };
  
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <div>
      {books.length > 0 ? (
        <div className="row">
          <h3 className="ml-3">Saved Books:</h3>
          {books.map((book) => (
            <div className="col-12">
              <SavedResults
                key={book._id}
                link={book.link}
                image={book.image}
                title={book.title}
                authors={book.authors}
                synop={book.description}
                onClick={() => deleteBook(book._id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Saved;
