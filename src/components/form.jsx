import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getBooks}>
      <input
        className="form_input"
        type="text"
        name="formSearch"
        placeholder="hardcover-fiction (must include hyphens)"
      />
      <button className="form_button">Search</button>
      <p>
        To get valid values, use a list names request. Be sure to replace spaces
        with <em>hyphens</em> (e.g., e-book-fiction or hardcover-fiction, not
        E-Book Fiction or Hardcover Fiction). (The parameter is not case
        sensitive.)
      </p>
      <p>
        Valid values: FICTION: combined-print-and-e-book-fiction,
        hardcover-fiction, NONFICTION: combined-print-and-e-book-nonfiction,
        hardcover-nonfiction, paperback-nonfiction,
        advice-how-to-and-miscellaneous, CHILDREN'S:
        childrens-middle-grade-hardcover, young-adult-hardcover
      </p>
    </form>
  );
};

export default Form;
