import React, { useState } from "react";
import Question from "./Question";

const QuestionPage = ({
    questions,
    score,
    setScore,
    setShowQuestionsPage,
    setShowFinalPage,
    handleRecord
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <>
      <Question
         questionIndex={questionIndex}
         questions={questions}
         setQuestionIndex={setQuestionIndex}
         setShowQuestionsPage={setShowQuestionsPage}
         setShowFinalPage={setShowFinalPage}
         score={score}
         setScore={setScore}
         handleRecord = {handleRecord}
      />
    </>
  );
};

export default QuestionPage;
