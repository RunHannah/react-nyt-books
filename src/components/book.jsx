import React from "react";

const Book = props => {
  return (
    <li className="book">
      {/* <p>ISBN: {props.isbn}</p> */}
      {/* <p className="book-rank">{props.rank}</p> */}
      <p className="book-week">Weeks on the List: {props.weeksOnList}</p>
      <p className="book-title">{props.bookTitle.toUpperCase()}</p>
      <p className="book-author">by {props.author} | {props.publisher}</p>
      <p className="book-description">{props.description}</p>
    </li>

  );
};

export default Book;
