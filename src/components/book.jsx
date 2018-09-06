import React, { Component } from "react";

const Book = props => {
  return (
    <div className="book">
      <span>{props.author}</span>
    </div>
  );
};

export default Book;
