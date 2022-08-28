import React from "react";
import Card from "./Card";

import "./FinalPage.css";

const FinalPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,

}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
  };

  return (
    <Card>
      <h1 className="heading">You reached the end of the game!</h1>

      <h3 className="primary_text">Your final score is:</h3>

      <h3 className="final_score">{score}</h3>

      <button className="play_again_btn" onClick={handleClick}>
        Play Again
      </button>
    </Card>
  );
};

export default FinalPage;