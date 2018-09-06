import React, { Component } from "react";
import "./App.css";
import Book from "./components/book";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List of NYT Books</h1>
        <Book author="Jenny Han" />
      </div>
    );
  }
}

export default App;
