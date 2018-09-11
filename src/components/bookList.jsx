import React from "react";
import Book from "./book";

const BookList = props => {
  return (
    <div className="row bookList">

        {props.books.map((b, index) => (

          <div className="col s12 m12 l12" key={index}>

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

    </div>
  );
};

export default BookList;
