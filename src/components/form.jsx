import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getBooks}>
      <input className="form_input" type="text" name="formSearch" />
      <button className="form_button">Search</button>
    </form>
  );
};

export default Form;
