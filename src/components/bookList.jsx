import React from "react";
import Book from "./book";

const BookList = props => {
  return (
    <div className="row bookList">
      <ol>
        {props.books.map((b, index) => (
          <div key={index}>
            <Book
              // key={index}
              // isbn={b.isbn}
              author={b.author}
              bookTitle={b.bookTitle}
              publisher={b.publisher}
              description={b.description}
              rank={b.rank}
              weeksOnList={b.weeksOnList}
            />
          </div>
        ))}
      </ol>
    </div>
  );
};

export default BookList;
