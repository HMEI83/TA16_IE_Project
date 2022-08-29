import React, { useState } from "react";
import InputHandler from "../wordCloud/InputHandler";
import FinalPage from "../slangQuiz/FinalPage";
import QuestionsPage from "../slangQuiz/QuestionPage";
import StartingPage from "../slangQuiz/StartingPage";
import WritingHandler from "../writingAssessment/WritingHandler";

export default function Learning() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  return (
    <>
      <h1 className="learning">LEARNING</h1>
      <a href="#i1">Slang Quiz</a>
      <a href="#i2">Writing</a>
      <a href="#i3">wordCloud</a>

      <div id="i1">
      <WritingHandler />
      </div>


      <div id="i2">
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

      <div id="i3">
      <InputHandler />
      </div>
    </>
  );
}
