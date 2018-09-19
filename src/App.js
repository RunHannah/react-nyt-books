import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Header from "./components/header";
import Form from "./components/form";
import BookList from "./components/bookList";

class App extends Component {
  state = {
    books: [],
    format: "" // book format i.e. hardcover-fiction
  };

  // NYT API call for best sellers list
  getBooks = async e => {
    console.log("NYT API Books Called");

    // from form component
    let formSearch = e.target.elements.formSearch.value;
    e.preventDefault();
    e.target.reset();

    // clear state for next search
    this.setState({ books: [] });
    console.log("BOOKS STATE CLEARED");

    // make API request
    const nytApiCall = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists.json?list=" +
        formSearch +
        "&api-key=" +
        process.env.REACT_APP_NYT_API_KEY
    );

    const data = await nytApiCall.json();

    // setState with data
    this.setState({ books: data.results });
    console.log("this.state.books", this.state.books);

    // to clean up form search, should use regex
    if (formSearch === "hardcover-fiction") {
      formSearch = "Hardcover Fiction";
    }
    if (formSearch === "hardcover-nonfiction") {
      formSearch = "Hardcover Nonfiction";
    }
    if (formSearch === "combined-print-and-e-book-fiction") {
      formSearch = "Combined Print & E-Book Fiction";
    }
    if (formSearch === "combined-print-and-e-book-nonfiction") {
      formSearch = "Combined Print & E-Book Nonfiction";
    }
    if (formSearch === "paperback-nonfiction") {
      formSearch = "Paperback Nonfiction";
    }
    if (formSearch === "advice-how-to-and-miscellaneous") {
      formSearch = "Advice, How-To & Miscellaneous";
    }
    if (formSearch === "childrens-middle-grade-hardcover") {
      formSearch = "Children's Middle Grade Hardcover";
    }
    if (formSearch === "young-adult-hardcover") {
      formSearch = "Young Adult Hardcover";
    }

    this.setState({ format: formSearch });

    this.giantFunction();
  };

  giantFunction() {
    console.log("giant Function called");

    let books = this.state.books;

    books.forEach(function(book) {
      console.log("inside books for each function");

      let isbn = book.isbns[0].isbn10;
      let image = "";
      let imagesObject = {};

      const googleApiCall = fetch(
        "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
          isbn +
          "&key=" +
          process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
      )
        .then(data => data.json())
        .then(function(data) {
          let googleData = data.items;

          if (googleData && data.items[0].volumeInfo.imageLinks.thumbnail) {
            image = data.items[0].volumeInfo.imageLinks.thumbnail;
          } else {
            image = "no image available";
          }
          imagesObject[isbn] = image;
          console.log("imagesObject", imagesObject);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  }

  render() {
    console.log("App.js RENDERED");

    return (
      <div className="container">
        <Nav />
        <Form getBooks={this.getBooks} />
        <Header format={this.state.format} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
