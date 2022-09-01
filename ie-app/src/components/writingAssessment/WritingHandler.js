import React, { useState } from "react";
import useTrait from "../utility/useTrait";
import "./WritingHandler.css";

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
        {dt.map((res, idx) => {
          const { index, offset, reason } = res;
          return (
            <p key={idx}>{reason}</p>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="layout">
      <textarea
        className="Writetextarea"
        rows="8"
        cols="70"
        placeholder="type something"
        type="text"
        value={enteredText}
        onChange={handleInputContent}
      />

      <br></br>
      <br></br>

      <button type="submit" onClick={submitHandler}>
        <span> Submit
        </span>
      </button>
      <span>{printdt()}</span>
    </div>
  );
};

export default WritingHandler;
