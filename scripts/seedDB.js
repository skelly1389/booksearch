const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    authors: ["J. K. Rowling", "Jack Thorne", "John Tiffany"],
    link:
      "http://books.google.com/books?id=kLAoswEACAAJ&dq=harry+potter&hl=&source=gbs_api",
    image:
      "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "Harry Potter and the Cursed Child",
  },
  {
    authors: ["Stephenie Meyer"],
    link:
      "https://play.google.com/store/books/details?id=GfMSW5w3NTwC&source=gbs_api",
    image:
      "http://books.google.com/books/content?id=GfMSW5w3NTwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "The Twilight Saga Complete Collection",
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
