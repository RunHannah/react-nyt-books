import React from "react";

const Book = props => {
  return (
      <div className="book">
        {/* <p>ISBN: {props.isbn}</p> */}
        {props.rank}
        <p className="book-week">Weeks on the List: {props.weeksOnList}</p>
        <p className="book-title">{props.bookTitle.toUpperCase()}</p>
        <p className="book-author">by {props.author} | {props.publisher}</p>
        <p className="book-description">{props.description}</p>
      </div>

  );
};

export default Book;
