import React, { useState } from "react";
import { TagCloud } from 'react-tagcloud'
import useTrait from "./useTrait";

function wordFreq(string) {
  if (string === null) return
  var words = string.replace(/[.]/g, '').split(/\s/);
  var freqMap = {};
  words.forEach(function(w) {
      if (!freqMap[w]) {
          freqMap[w] = 0;
      }
      freqMap[w] += 1;
  });
  const result = Object.entries(freqMap).map(([value, count]) => ({value, count}))
  console.log(result)
  return result;
}

const InputHandler = () => {
  const [enteredText, setEnteredText] = useState("");
  const str = useTrait("")
  const [submittedText, setSubmittedText] = useState(null);
  const [dt, setDt] = useState([])

  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    str.set(enteredText)
    setEnteredText("");
    setDt(wordFreq(str.get()))
  };

  return (
    <div className="App">
      <h1>Get user input</h1>
      {/* <form onSubmit={submitHandler}> */}
      <input
        placeholder="type something"
        type="text"
        value={enteredText}
        onChange={textChangeHandler}
      />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
      {/* </form> */}
      <TagCloud
        tags={dt}
        className="simple-cloud"
        onClick={(tag) => {
          const value = prompt('Edit tag value', tag.value)
          if (value == null) {
            return
          }
          const newTag = { value, count: tag.count }
          const newData = dt.map((t) => {
            if (t.value === tag.value) {
              return newTag
            }
            return t
          })
          setDt(newData)
        }}
      />
    </div>
  );
};

export default InputHandler;
