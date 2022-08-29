import React, { useState } from "react";
import useTrait from "../utility/useTrait";

const WritingHandler = () => {
  const [enteredText, setEnteredText] = useState("");
  const str = useTrait("");
  const [dt, setDt] = useState([]);
  const handleInputContent = (event) => {
    setEnteredText(event.target.value);
  };

  const getSuggestions = (inputValue) => {
    var writeGood = require('write-good');
    return writeGood(inputValue);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    str.set(enteredText);
    setEnteredText("");
    setDt(getSuggestions(str.get()));
  };

  return (
    <div>
      <textarea
        className="text-area"
        rows="5"
        cols="50"
        placeholder="type something"
        type="text"
        value={enteredText}
        onChange={handleInputContent}
      />

      <button type="submit" onClick={submitHandler}>Submit</button>
      <ul>
      {dt.map((book, idx) => {
        const {a, b, c} = book;
        return (
          <li key={idx}>
            <h3>{a}</h3>
            <p>{b}</p>
            <p>{c}</p>
          </li>
        );
      })}
     </ul>
    </div>
  );
};

export default WritingHandler;
