import React from "react";

const Book = props => {
  return (
    <div className="book">
      {/* <p>ISBN: {props.isbn}</p> */}
      <p style={{ fontSize: 24, fontWeight: "bold" }}>{props.bookTitle}</p>
      <p style={{ fontSize: 18 }}>{props.description}</p>
      <p style={{ fontSize: 18 }}>by {props.author}</p>
      <p>
        Rank: {props.rank}, Weeks on the List: {props.weeksOnList}
      </p>
    </div>
  );
};

export default Book;
