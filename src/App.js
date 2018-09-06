import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import BookList from "./components/bookList";
import Nav from "./components/nav";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=" +
          process.env.REACT_APP_NYT_API_KEY
      )
      .then(response => {
        const nytBookList = response.data.results;

        const filteredBookData = nytBookList.map(book => {
          return {
            isbn: book.isbns[1].isbn10,
            author: book.book_details[0].author,
            bookTitle: book.book_details[0].title,
            description: book.book_details[0].description,
            rank: book.rank,
            weeksOnList: book.weeks_on_list
          };
        });

        // create a new "State" object, don't change original state
        const newState = Object.assign({}, this.state, {
          books: filteredBookData
        });
        // storing state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
