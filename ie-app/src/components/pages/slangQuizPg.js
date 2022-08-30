import React, {useState} from "react";
import FinalPage from "../slangQuiz/FinalPage";
import QuestionsPage from "../slangQuiz/QuestionPage";
import StartingPage from "../slangQuiz/StartingPage";

const SlangQuiz = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  return (
    <>
      {showStartingPage && (
        <StartingPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionsPage={setShowQuestionsPage}
          topScore={topScore}
        />
      )}

      {showQuestionsPage && (
        <QuestionsPage
          score={score}
          setScore={setScore}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
        />
      )}

      {showFinalPage && (
        <FinalPage
          score={score}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowStartingPage={setShowStartingPage}
          setShowFinalPage={setShowFinalPage}
          setScore={setScore}
        />
      )}
    </>
  );
};

export default SlangQuiz;
