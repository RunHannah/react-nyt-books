import React from "react";

const Book = props => {
  return (
    <div className="book">
      <span>
        Author: {props.author}, Title: {props.bookTitle}
      </span>
    </div>
  );
};

export default Book;
