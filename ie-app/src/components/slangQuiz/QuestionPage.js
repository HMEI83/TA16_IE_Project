import React, { useEffect } from "react";
import { useState } from "react";
import Question from "./Question";

import { questions } from "./questions";

const QuestionPage = ({
    setShowPages,
    score,
    setScore,
    setShowQuesstionsPage,
    setShowFinalPage,
}) => {
    const [questionIndex, setQuestionIndex] = useState(0);

    return (
        <>
        <Question questionIndex={questionIndex} questions={questions}
        setQuestionIndex={setQuestionIndex} 
        setShowQuesstionsPage={setShowQuesstionsPage}
        setShowFinalPage={setShowFinalPage}
        score={score}
        setScore={setScore}
        />
        </>
    );
};


export default QuestionPage;