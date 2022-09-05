import React from "react";
import {Card1, Card2} from "./Card";

import "./FinalPage.css";

export const FinalSlangPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  questions,
  setTopScore,
  setScore,
  record,
  setAnswerRecord
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setAnswerRecord({"q1" : 0, "q2" : 0, "q3" : 0, "q4": 0, "q5" : 0, "q6" : 0, "q7" : 0, "q8" : 0,
    "q9" : 0, "q10" : 0})
  };

  const handleResult = (key, val) => {
    switch (key) {
      case "q1": {
        if (val) return <span style={{color: "green"}}>q1: {questions[0].questionText} correct</span>
        else return <span style={{color: "red"}}>q1: {questions[0].questionText} incorrect</span>
      }
      case "q2": {
        if (val) return <span style={{color: "green"}}>q2: {questions[1].questionText} correct</span>
        else return <span style={{color: "red"}}>q2: {questions[1].questionText} incorrect</span>
      }
      case "q3": {
        if (val) return <span style={{color: "green"}}>q3: {questions[2].questionText} correct</span>
        else return <span style={{color: "red"}}>q3: {questions[2].questionText} incorrect</span>
      }
      case "q4": {
        if (val) return <span style={{color: "green"}}>q4: {questions[3].questionText} correct</span>
        else return <span style={{color: "red"}}>q4: {questions[3].questionText} incorrect</span>
      }
      case "q5": {
        if (val) return <span style={{color: "green"}}>q5: {questions[4].questionText} correct</span>
        else return <span style={{color: "red"}}>q5: {questions[4].questionText} incorrect</span>
      }
      case "q6": {
        if (val) return <span style={{color: "green"}}>q6: {questions[5].questionText} correct</span>
        else return <span style={{color: "red"}}>q6: {questions[5].questionText} incorrect</span>
      }
      case "q7": {
        if (val) return <span style={{color: "green"}}>q7: {questions[6].questionText} correct</span>
        else return <span style={{color: "red"}}>q7: {questions[6].questionText} incorrect</span>
      }
      case "q8": {
        if (val) return <span style={{color: "green"}}>q8: {questions[7].questionText} correct</span>
        else return <span style={{color: "red"}}>q8: {questions[7].questionText} incorrect</span>
      }
      case "q9": {
        if (val) return <span style={{color: "green"}}>q9: {questions[8].questionText} correct</span>
        else return <span style={{color: "red"}}>q9: {questions[8].questionText} incorrect</span>
      }
      case "q10": {
        if (val) return <span style={{color: "green"}}>q10: {questions[9].questionText} correct</span>
        else return <span style={{color: "red"}}>q10: {questions[9].questionText} incorrect</span>
      }
    }
  }

  return (
    <Card1>
      <h1 className="heading">You reached the end of the game!</h1>

      <h3 className="primary_text">Your final score is:</h3>

      <h3 className="final_score">{score}</h3>
      <br/><br/>
      <div>{Object.entries(record).map(([key, value]) => (
        <div key={key}>
          {handleResult(key, value)}
        </div>
      ))}</div>

      <button className="play_again_btn" onClick={handleClick}>
        Play Again
      </button>
    </Card1>
  );
};

export const FinalGrammarPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  questions,
  setTopScore,
  setScore,
  record,
  setAnswerRecord
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setAnswerRecord({"q1" : 0, "q2" : 0, "q3" : 0, "q4": 0, "q5" : 0, "q6" : 0, "q7" : 0, "q8" : 0,
    "q9" : 0, "q10" : 0})
  };

  const handleResult = (key, val) => {
    switch (key) {
      case "q1": {
        if (val) return <span style={{color: "green"}}>q1: {questions[0].questionText} correct</span>
        else return <span style={{color: "red"}}>q1: {questions[0].questionText} incorrect</span>
      }
      case "q2": {
        if (val) return <span style={{color: "green"}}>q2: {questions[1].questionText} correct</span>
        else return <span style={{color: "red"}}>q2: {questions[1].questionText} incorrect</span>
      }
      case "q3": {
        if (val) return <span style={{color: "green"}}>q3: {questions[2].questionText} correct</span>
        else return <span style={{color: "red"}}>q3: {questions[2].questionText} incorrect</span>
      }
      case "q4": {
        if (val) return <span style={{color: "green"}}>q4: {questions[3].questionText} correct</span>
        else return <span style={{color: "red"}}>q4: {questions[3].questionText} incorrect</span>
      }
      case "q5": {
        if (val) return <span style={{color: "green"}}>q5: {questions[4].questionText} correct</span>
        else return <span style={{color: "red"}}>q5: {questions[4].questionText} incorrect</span>
      }
      case "q6": {
        if (val) return <span style={{color: "green"}}>q6: {questions[5].questionText} correct</span>
        else return <span style={{color: "red"}}>q6: {questions[5].questionText} incorrect</span>
      }
      case "q7": {
        if (val) return <span style={{color: "green"}}>q7: {questions[6].questionText} correct</span>
        else return <span style={{color: "red"}}>q7: {questions[6].questionText} incorrect</span>
      }
      case "q8": {
        if (val) return <span style={{color: "green"}}>q8: {questions[7].questionText} correct</span>
        else return <span style={{color: "red"}}>q8: {questions[7].questionText} incorrect</span>
      }
      case "q9": {
        if (val) return <span style={{color: "green"}}>q9: {questions[8].questionText} correct</span>
        else return <span style={{color: "red"}}>q9: {questions[8].questionText} incorrect</span>
      }
      case "q10": {
        if (val) return <span style={{color: "green"}}>q10: {questions[9].questionText} correct</span>
        else return <span style={{color: "red"}}>q10: {questions[9].questionText} incorrect</span>
      }
    }
  }

  return (
    <Card2>
      <h1 className="heading">You reached the end of the game!</h1>

      <h3 className="primary_text">Your final score is:</h3>

      <h3 className="final_score">{score}</h3>
      <br/><br/>
      <div>{Object.entries(record).map(([key, value]) => (
        <div key={key}>
          {handleResult(key, value)}
        </div>
      ))}</div>

      <button className="play_again_btn" onClick={handleClick}>
        Play Again
      </button>
    </Card2>
  );
};