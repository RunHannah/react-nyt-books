import React, { Component } from "react";
import Book from "./book";

const BookList = props => {
  return (
    <div>
      {props.books.map(b => (
        <Book key={b.id} author={b.author} bookTitle={b.bookTitle} />
      ))}
    </div>
  );
};

export default BookList;
