import React, { Component } from "react";
// import axios from "axios";

class Book extends Component {
  state = {
    books: this.props,
    imageUrls: []
  };

  getWeeksOnList = () => {
    return this.state.books.weeksOnList === 1
      ? "NEW THIS WEEK"
      : this.state.books.weeksOnList + " WEEKS ON THE LIST";
  };

  render() {
    console.log("Book Render");

    return (
      <li className="book">
        <p className="book-week">{this.getWeeksOnList()}</p>
        <p className="book-title">{this.state.books.bookTitle.toUpperCase()}</p>
        <p className="book-author">
          by {this.state.books.author} | {this.state.books.publisher}
        </p>
        <p className="book-description">{this.state.books.description}</p>
        BOOK COVER:
        <img src={this.state.imageUrl} alt="please-render" />
      </li>
    );
  }
}

export default Book;
