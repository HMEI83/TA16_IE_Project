import React, { useState } from "react";
import useTrait from "../utility/useTrait";
import "./WritingHandler.css";

const WritingHandler = () => {
  const [enteredText, setEnteredText] = useState("");
  const str = useTrait("");
  const [dt, setDt] = useState(null);
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
    if (!dt || dt === null) {
      return <></>
    }
    if(dt.length===0 && enteredText.length!==0){
      return <><p>all good</p></>
    }
    return (
      <ul>
        {dt.map((res, idx) => {
          const { index, offset, reason } = res;
          if(!index || index===null){
            return (
              <div className="result"><p >All good</p></div>
            )
          } else{
            return (
              <div className="result"><p key={idx}>{reason}</p></div>
            );
          }
          
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
      <br></br>
      <span>{printdt()}</span>
    </div>
  );
};

export default WritingHandler;
