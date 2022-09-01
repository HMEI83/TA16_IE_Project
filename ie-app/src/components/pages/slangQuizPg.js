import React, { useState } from "react";
import FinalPage from "../slangQuiz/FinalPage";
import QuestionsPage from "../slangQuiz/QuestionPage";
import StartingPage from "../slangQuiz/StartingPage";
import "./slangQuiz.css";

const SlangQuiz = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  return (
    <div className="slangPage">
      <div className="slangIntro">
        Wanna test your ability in understanding Australian slang? Come and take
        our quiz. You can view it as a simple game. There is ten commonly used
        slang in AU. After finishing the test, you can view your result
        regarding the level of understanding of AU slang.
      </div>

      <div className="quizPos">
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
      </div>
    </div>
  );
};

export default SlangQuiz;
