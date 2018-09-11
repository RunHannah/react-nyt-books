import React, { Component } from "react";

class Book extends Component {
  getWeeksOnList() {
    return this.props.weeksOnList === 1
      ? "NEW THIS WEEK"
      : this.props.weeksOnList + " WEEKS ON THE LIST";
  }

  render(props) {
    return (
      <li className="book">
        {/* <p>ISBN: {props.isbn}</p> */}
        {/* <p className="book-rank">{props.rank}</p> */}
        <p className="book-week">{this.getWeeksOnList()}</p>
        <p className="book-title">{this.props.bookTitle.toUpperCase()}</p>
        <p className="book-author">
          by {this.props.author} | {this.props.publisher}
        </p>
        <p className="book-description">{this.props.description}</p>
      </li>
    );
  }
}

export default Book;
