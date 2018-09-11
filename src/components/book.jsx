import React, { Component } from "react";
import axios from "axios";

class Book extends Component {
  getWeeksOnList() {
    return this.props.weeksOnList === 1
      ? "NEW THIS WEEK"
      : this.props.weeksOnList + " WEEKS ON THE LIST";
  }

  findBookCover(isbn) {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
          isbn +
          "&key=" +
          process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
      )
      .then(response => {
        let image = response.data.items[0].volumeInfo.imageLinks.thumbnail;

        image = image.replace(/^http:\/\//i, "https://");

        console.log("IMAGE", image);
        return image;
      })
      .catch(error => console.log(error));
  }

  render(props) {
    // let isbn = this.props.isbn;

    return (
      <li className="book">
        <p>ISBN: {this.props.isbn}</p>
        {/* <p className="book-rank">{props.rank}</p> */}
        <p className="book-week">{this.getWeeksOnList()}</p>
        <p className="book-title">{this.props.bookTitle.toUpperCase()}</p>
        <p className="book-author">
          by {this.props.author} | {this.props.publisher}
        </p>
        <p className="book-description">{this.props.description}</p>
        IMAGE:{" "}
        <img
          src="http://books.google.com/books/content?id=bPJUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          alt="google-book"
        />
        BOOK COVER:
        <img src={this.findBookCover(this.props.isbn)} alt="google-bookTWO" />
      </li>
    );
  }
}

export default Book;
