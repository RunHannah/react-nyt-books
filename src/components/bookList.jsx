import React from "react";
import Book from "./book";

const BookList = props => {
  return (
    <div className="row flex bookList">
      <ol>

        {props.books.map((b, index) => (

          <div className="col s10 m10 l10" key={index}>

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
