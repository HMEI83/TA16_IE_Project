import React from "react";
import {Card1, Card2} from "./Card";
import Axios from "axios";
import "./Question.css";

export const SlangQuestion = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore,
  handleRecord
}) => {
  const handleClick = (isCorrect) => {
    if (questionIndex < 9) {
      if (isCorrect) {
        setScore((score) => (score += 1));
        handleRecord(questionIndex)
      }

      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (isCorrect) {
        setScore((score) => (score += 1));
        handleRecord(questionIndex)
      }

      setShowQuestionsPage(false);
      setShowFinalPage(true);
    }
  };

  return (
    <Card1>
      <h1 className="question">{questions[questionIndex].questionText}</h1>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className="answer"
            onClick={() => handleClick(answer.correctAnswer)}
          >
            <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="score">
        Score: <span>{score}</span>
      </p>

      <p className="question_number">
        Question <span>{questionIndex + 1}</span>/10
      </p>
    </Card1>
  );
};

export const EnglishQuestion = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore,
  handleRecord
}) => {
  const handleClick = (selectedAns) => {
    Axios.get("http://localhost:3001/englishquiz", {params: { quizno: questionIndex}}).then((response) => {
      if (questionIndex < 9) {
        if (response.data[0].ans === selectedAns) {
          setScore((score) => (score += 1));
          handleRecord(questionIndex)
        }
  
        setQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        if (response.data[0].ans === selectedAns) {
          setScore((score) => (score += 1));
          handleRecord(questionIndex)
        }
  
        setShowQuestionsPage(false);
        setShowFinalPage(true);
      }
    });
  };

  return (
    <Card2>
      <h1 className="question">{questions[questionIndex].questionText}</h1>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className="answer"
            onClick={() => handleClick(answer.answerText)}
          >
            <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="score">
        Score: <span>{score}</span>
      </p>

      <p className="question_number">
        Question <span>{questionIndex + 1}</span>/10
      </p>
    </Card2>
  );
};
