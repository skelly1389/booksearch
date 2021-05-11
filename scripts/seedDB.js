const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    authors: ["J. K. Rowling", "Jack Thorne", "John Tiffany"],
    link:
      "http://books.google.com/books?id=kLAoswEACAAJ&dq=harry+potter&hl=&source=gbs_api",
    image:
      "http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    title: "Harry Potter and the Cursed Child",
    description:
      "The official playscript of the original West End production of Harry Potter and the Cursed Child. It was always difficult being Harry Potter and it isn't much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places. The playscript for Harry Potter and the Cursed Child was originally released as a 'special rehearsal edition' alongside the opening of Jack Thorne's play in London's West End in summer 2016. Based on an original story by J.K. Rowling, John Tiffany and Jack Thorne, the play opened to rapturous reviews from theatregoers and critics alike, while the official playscript became an immediate global bestseller. This revised paperback edition updates the 'special rehearsal edition' with the conclusive and final dialogue from the play, which has subtly changed since its rehearsals, as well as a conversation piece between director John Tiffany and writer Jack Thorne, who share stories and insights about reading playscripts. This edition also includes useful background information including the Potter family tree and a timeline of events from the wizarding world prior to the beginning of Harry Potter and the Cursed Child.",
  },
  {
    authors: ["Stephenie Meyer"],
    link:
      "https://play.google.com/store/books/details?id=GfMSW5w3NTwC&source=gbs_api",
    image:
      "http://books.google.com/books/content?id=GfMSW5w3NTwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "The Twilight Saga Complete Collection",
    description:
      "This stunning set, which includes Twilight, New Moon, Eclipse, Breaking Dawn, and The Short Second Life of Bree Tanner: An Eclipse Novella, is the perfect gift for fans of the bestselling vampire love story. Whether you're Team Edward or Team Jacob, fall in love with the Twilight series all over again with this beautiful complete collection! Deeply romantic and extraordinarily suspenseful, The Twilight Saga captures the struggle between defying our instincts and satisfying our desires. Experience the entire breathtaking love story with this perfect gift for new and longtime fans alike. It's here! #1 bestselling author Stephenie Meyer makes a triumphant return to the world of Twilight with the highly anticipated companion, Midnight Sun: the iconic love story of Bella and Edward told from the vampire's point of view. \"People do not want to just read Meyer's books; they want to climb inside them and live there.\" -- Time \"A literary phenomenon.\" -- The New York Times",
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
