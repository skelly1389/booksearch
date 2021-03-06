import axios from "axios";
const apiKey = "AIzaSyBv-gv2mS2dzHGEf9wcdfLcR2R2wrbkibI";

export default {
  searchBooks: function (userSearch) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + userSearch + "&maxResults=10&key=" + apiKey);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
