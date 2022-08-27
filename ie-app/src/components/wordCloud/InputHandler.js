import React, { useState } from "react";
import { TagCloud } from "react-tagcloud";
import useTrait from "./useTrait";
import "./wordCloud.css";
import Button from '@mui/material/Button';

function wordFreq(string) {
  if (string === null) return;
  var words = string.replace(/[.]/g, "").split(/\s/);
  var freqMap = {};
  words.forEach(function (w) {
    if (!freqMap[w]) {
      freqMap[w] = 0;
    }
    freqMap[w] += 1;
  });
  const result = Object.entries(freqMap).map(([value, count]) => ({
    value,
    count,
  }));
  console.log(result);
  return result;
}

const InputHandler = () => {
  const [enteredText, setEnteredText] = useState("");
  const str = useTrait("");
  //const [submittedText, setSubmittedText] = useState(null);
  const [dt, setDt] = useState([]);

  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    str.set(enteredText);
    setEnteredText("");
    setDt(wordFreq(str.get()));
  };

  return (
    <div className="word-cloud">
      <h1>Get user input</h1>
      <textarea
        className="text-area"
        rows="5"
        cols="50"
        placeholder="type something"
        type="text"
        value={enteredText}
        onChange={textChangeHandler}
      />

      
      {/* <Button variant="contained" type="submit" onClick={submitHandler}>Submit</Button>; */}
      <button type="submit" onClick={submitHandler} className="btn">
        Submit
      </button>
      <TagCloud
        minSize={12}
        maxSize={35}
        tags={dt}
        className="simple-cloud"
        onClick={(tag) => {
          const value = prompt("Edit tag value", tag.value);
          if (value == null) {
            return;
          }
          const newTag = { value, count: tag.count };
          const newData = dt.map((t) => {
            if (t.value === tag.value) {
              return newTag;
            }
            return t;
          });
          setDt(newData);
        }}
      />
    </div>
  );
};

export default InputHandler;
