import React from "react";
import "./StartingPage.css";

const StartingPage = ({
    setShowStartgingPage,
    setShowQuestionsPage,
    topScore
}) => {
    const startGame = () => {
        setShowStartgingPage(false);
        setShowQuestionsPage(true);
    }

    return (
        <Card>
            <h1 className="header">Welcom to Slang Quiz Game!</h1>
            <button className="start_btn" onClick={startGame}>Let's play</button>
            <p>Top score: <span>{topScore}</span></p>
        </Card>
    );
};

export default StartingPage;