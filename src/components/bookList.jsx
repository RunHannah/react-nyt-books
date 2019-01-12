import React from 'react';
import Book from './Book';

const BookList = props => {
  return (
    <div className="row bookList">
      <ol>
        {props.books.map((book, index) => (
          <div key={index}>
            <Book
              author={book.book_details[0].author}
              bookTitle={book.book_details[0].title}
              publisher={book.book_details[0].publisher}
              description={book.book_details[0].description}
              rank={book.rank}
              weeksOnList={book.weeks_on_list}
            />
          </div>
        ))}
      </ol>
    </div>
  );
};

export default BookList;
