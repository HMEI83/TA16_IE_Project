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
    setDt(getSuggestions(str.get()));
  };

  const printdt = () => {
    if (dt && dt === null) {
      return <></>
    }
    return (
      <ul>
      {dt.map((book, idx) => {
        const {index, offset, reason} = book;
        return (
          <li key={idx}>
            <p>{reason}</p>
          </li>
        );
      })}
     </ul>
    );
  }

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
      <span>{printdt()}</span>
    </div>
  );
};

export default WritingHandler;
