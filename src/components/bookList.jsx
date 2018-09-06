import React from "react";
import Book from "./book";

const BookList = props => {
  return (
    <div>
      {props.books.map((b, index) => (
        <Book
          key={index}
          isbn={b.isbn}
          author={b.author}
          bookTitle={b.bookTitle}
          description={b.description}
          rank={b.rank}
          weeksOnList={b.weeksOnList}
        />
      ))}
    </div>
  );
};

export default BookList;
