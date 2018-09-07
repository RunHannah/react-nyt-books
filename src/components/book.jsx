import React from "react";

const Book = props => {
  return (
    <div className="book">
      <span>
        Author: {props.author}, Title: {props.bookTitle}, Description:{" "}
        {props.description}, Rank: {props.rank}, Weeks on the List:
        {props.weeksOnList}
      </span>
    </div>
  );
};

export default Book;
