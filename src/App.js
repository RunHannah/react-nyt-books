import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import BookList from "./components/bookList";

// const books = [
//   {
//     id: 1,
//     author: "Jenny Han",
//     bookTitle: "To All The Boys I've Loved Before"
//   },
//   { id: 2, author: "J.D. Salinger", bookTitle: "Franny and Zooey" },
//   { id: 3, author: "Charles Eisenstein", bookTitle: "Sacred Economics" },
//   { id: 4, author: "Hobbes", bookTitle: "Leviathan" }
// ];

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    // let apiKey = "fc6309a386ad42cca1a1a07ef8d49aed";

    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=fc6309a386ad42cca1a1a07ef8d49aed"
      )
      .then(response => {
        const newBookList = response.data.results;

        newBookList.map(b => {
          // console.log("All Data", newBookList);

          console.log("isbn", b.isbns[1].isbn10);
          console.log("author", b.book_details[0].author);
          console.log("bookTitle", b.book_details[0].title);
          console.log("description", b.book_details[0].description);
          console.log("rank", b.rank);
          console.log("weeksOnList", b.weeks_on_list);
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>List of NYT Books</h1>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
