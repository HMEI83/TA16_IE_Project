import React, { useState } from "react";
import { FinalSlangPage } from "../quizzes/FinalPage";
import { SlangQuestionPage } from "../quizzes/QuestionPage";
import { SlangStartingPage } from "../quizzes/StartingPage";
import "./quiz.css";
import { slangqs } from "../quizzes/questions";
import "../general/SlangCard.css";

const SlangQuiz = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  const [answerRecord, setAnswerRecord] = useState({ q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0, q9: 0, q10: 0 });

  const leanrnSlangcards = [
    { id: 1, front: "Hard yakka", back: "Hard Work", color: "#77AADA" },
    { id: 2, front: "Sparrow", back: "Very early in the morning" , color: "#5f7fbf" },
    { id: 3, front: "mate's rates", back: "A special discounter price for close friends or family", color: "#BAE1F2"  },
    { id: 4, front: "Knackered", back: "Tired" , color: "#B5C5E5" },
    { id: 5, front: "McDonald's", back: "Macca's" , color: "#749DC3" },
    { id: 6, front: "Have a crack", back: "Try to attempt something" , color: "#A8DEFD" },
    { id: 7, front: "Sanger", back: "A sandwich" , color: "#77AADA"},
    { id: 8, front: "A stubbie short of a six pack", back: "Somene who is a bit crazy" , color: "#5f7fbf"},
    { id: 9, front: "Steve Irwin's famous catch phrase", back: "Crikey" , color: "#BAE1F2"},
    { id: 10, front: "Budgie Smugglers", back: "Male swimming costume" , color: "#B5C5E5"},
  ]

  const handleRecord = (ind) => {
    var q = "q" + ind;
    setAnswerRecord({ ...answerRecord, [q]: 1 });
  }
  return (
    <>
      <div className="slangHeader"><h1>Australia Slang Test</h1></div>
      <div>
        <div className="learnSlang">
          {leanrnSlangcards.map(leanrnSlangcard => {
            return (
              <div key={leanrnSlangcard.id} className="card">
                <div style={{backgroundColor: leanrnSlangcard.color}} className="content">
                  <div className="front">
                    <p>{leanrnSlangcard.front}</p>
                    <br></br>
                    <p className="subtitle">Hover me :)</p>
                  </div>

                  <div style={{backgroundColor: leanrnSlangcard.color}} className="back">
                    <p className="description">
                      {leanrnSlangcard.back}
                    </p>
                  </div>
                </div>
              </div>
            )

          })}
        </div>

        <div className="slangIntro">
          Wanna test your ability in understanding Australian slang? Come and
          take our quiz. You can view it as a simple game. There is ten commonly
          used slang in AU. After finishing the test, you can view your result
          regarding the level of understanding of AU slang.
        </div>

        <div className="quizPos">
          {showStartingPage && (
            <SlangStartingPage
              setShowStartingPage={setShowStartingPage}
              setShowQuestionsPage={setShowQuestionsPage}
              topScore={topScore}
            />
          )}

          {showQuestionsPage && (
            <SlangQuestionPage
              score={score}
              setScore={setScore}
              setShowQuestionsPage={setShowQuestionsPage}
              setShowFinalPage={setShowFinalPage}
              handleRecord={handleRecord}
              questions={slangqs}
            />
          )}

          {showFinalPage && (
            <FinalSlangPage
              score={score}
              topScore={topScore}
              setTopScore={setTopScore}
              setShowStartingPage={setShowStartingPage}
              setShowFinalPage={setShowFinalPage}
              setScore={setScore}
              setAnswerRecord={setAnswerRecord}
              record={answerRecord}
              questions={slangqs}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SlangQuiz;
