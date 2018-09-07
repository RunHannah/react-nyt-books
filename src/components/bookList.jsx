import React from "react";
import Book from "./book";

const BookList = props => {
  return (
    <div className="row flex bookList">
      {props.books.map((b, index) => (
        <div className="col s12 m3 l4">
          <Book
            key={index}
            // isbn={b.isbn}
            author={b.author}
            bookTitle={b.bookTitle}
            description={b.description}
            rank={b.rank}
            weeksOnList={b.weeksOnList}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;
