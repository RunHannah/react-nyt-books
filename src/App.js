import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Header from "./components/header";
import Form from "./components/form";
import BookList from "./components/bookList";

class App extends Component {
  state = {
    books: []
  };

  getBooks = async e => {
    const formSearch = e.target.elements.formSearch.value;
    e.preventDefault();

    const nytApiCall = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" +
        process.env.REACT_APP_NYT_API_KEY
    );

    const data = await nytApiCall.json();
    this.setState({ books: data.results });
    console.log("this.state.books", this.state.books);
  };

  render() {
    return (
      <div className="container">
        <Nav />
        <Form getBooks={this.getBooks} />
        <Header />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
