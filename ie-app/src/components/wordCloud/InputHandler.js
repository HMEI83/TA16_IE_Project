import React, { useState } from "react";
import ReactWordcloud from 'react-wordcloud';
import useTrait from "../utility/useTrait";
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
    <div >
      <div className="word-cloud">
        {/* <h4>WordCloud</h4> */}
        <div>
          <div className="titleBg">
            Key word Visulazation
          </div>
          <textarea
            className="Vocatextarea"
            rows="8"
            cols="60"
            placeholder="type something"
            type="text"
            value={enteredText}
            onChange={textChangeHandler}
          />

          <br></br>
          <br></br>

          <button type="submit" onClick={submitHandler}>
            <span>Submit</span>
          </button>
        </div>

        <div>
          <ReactWordcloud
            options={options}
            size={size}
            words={dt}
          />
        </div>
      </div>
      <div className="subDiv">
        <p>
          Welcome to our word cloud and have fun.
          We want to make our website more interesting and encourage users to interact with us. Whether you want to learn English or keep up with Australian news, enter some words so that you can see the word frequency. For example, if you copy an article into this box, you can see the keywords, it is the word that appears most frequently in the article
        </p>
      </div>
    </div>
  );
};

export default InputHandler;