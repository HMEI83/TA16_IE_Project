import React from "react";
import Card from "./Card";
import "./Question.css";

const Question = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore,
}) => {
  const clickHanlder = (isCorrect) => {
    if (questionIndex < 9) {
      if (isCorrect) {
        setScore((score) => (score += 1));
      }

      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (isCorrect) {
        setScore((score) => (score += 1));
      }
      setShowQuestionsPage(false);
      setShowFinalPage(true);
    }
  };

  return (
    <Card>
      <h1 className="question">{question[questionIndex].questionText}</h1>
      <div>
        {questions[questionIndex].answer.map((answer, i) => (
          <div
            key={i}
            className="answer"
            onClick={() => clickHanlder(answer.correctAnswer)}
          >
           <p>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="score"> Score: <span>{score}</span></p>
      <p>
        Question <span>{questionIndex + 1}</span>/10
      </p>
    </Card>
  );
};

export default Question;
