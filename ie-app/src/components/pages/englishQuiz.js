import React, { useState } from "react";
import {FinalGrammarPage} from "../quizzes/FinalPage";
import {EnglishQuestionPage} from "../quizzes/QuestionPage";
import {GrammarStartingPage} from "../quizzes/StartingPage";
import "./quiz.css";
import {englishqz} from "../quizzes/questions";

const EnglishQuiz = () => {
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [showStartingPage, setShowStartingPage] = useState(true);
    const [showQuestionsPage, setShowQuestionsPage] = useState(false);
    const [showFinalPage, setShowFinalPage] = useState(false);
    const [answerRecord, setAnswerRecord] = useState({q1:0, q2:0, q3:0, q4:0, q5:0, q6:0, q7:0, q8:0, q9:0, q10:0});
  
    const handleRecord = (ind) => {
      var q = "q" + ind;
      setAnswerRecord({...answerRecord, [q] : 1});
    }
    return (
      <>
        <div className="headerBg">English Grammar Quiz</div>
      <div className="slangTotal">
        <div className="slangPage">
          <div className="slangIntro">
          Ten practice questions exploring the elements of good grammar: punctuation, parts of speech, and sentence structure.
          </div>
  
          <div className="quizPos" style={{marginLeft: "225px"}}>
            {showStartingPage && (
              <GrammarStartingPage
                setShowStartingPage={setShowStartingPage}
                setShowQuestionsPage={setShowQuestionsPage}
                topScore={topScore}
              />
            )}
  
            {showQuestionsPage && (
              <EnglishQuestionPage
                score={score}
                setScore={setScore}
                setShowQuestionsPage={setShowQuestionsPage}
                setShowFinalPage={setShowFinalPage}
                handleRecord = {handleRecord}
                questions={englishqz}
              />
            )}
  
            {showFinalPage && (
              <FinalGrammarPage
                score={score}
                topScore={topScore}
                setTopScore={setTopScore}
                setShowStartingPage={setShowStartingPage}
                setShowFinalPage={setShowFinalPage}
                setScore={setScore}
                record = {answerRecord}
                questions={englishqz}
              />
            )}
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default EnglishQuiz;