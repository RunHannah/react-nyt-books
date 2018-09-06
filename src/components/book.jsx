import React from "react";

const Book = props => {
  return (
    <div className="book">
      <span>
        ISBN: {props.isbn}, Author: {props.author}, Title: {props.bookTitle},
        Description: {props.description}, Rank: {props.rank}, Weeks on the List:{" "}
        {props.weeks_on_list}
      </span>
    </div>
  );
};

export default Book;
