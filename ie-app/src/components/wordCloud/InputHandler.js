import React, { useState } from "react";
import ReactWordcloud from 'react-wordcloud';
import useTrait from "./useTrait";
import "./WordCloud.css";

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
  const result = Object.entries(freqMap).map(([text, value]) => ({
    text,
    value
  }));
  console.log(result);
  return result;
}

const InputHandler = () => {
  const [enteredText, setEnteredText] = useState("");
  const str = useTrait("");
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

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: true,
    fontFamily: "impact",
    fontSizes: [15, 70],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000
  };
  const size = [600, 400];

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

      
      <button type="submit" onClick={submitHandler} className="btn">
        Submit
      </button>
      <ReactWordcloud
        options={options}
        size={size}
        words={dt}
      />
    </div>
  );
};

export default InputHandler;