import React from "react";
import "./StartingPage.css";
import {Card1, Card2} from "./Card";

export const SlangStartingPage = ({
    setShowStartingPage,
    setShowQuestionsPage,
    topScore
}) => {
    const startGame = () => {
        setShowStartingPage(false);
        setShowQuestionsPage(true);
    }

    return (
        <Card1>
            <h1 className="header">Welcom to Slang Quiz Game!</h1>
            <button className="start_btn" onClick={startGame}>Let's play</button>
            <p>Top score: <span>{topScore}</span></p>
        </Card1>
    );
};

export const GrammarStartingPage = ({
    setShowStartingPage,
    setShowQuestionsPage,
    topScore
}) => {
    const startGame = () => {
        setShowStartingPage(false);
        setShowQuestionsPage(true);
    }

    return (
        <Card2>
            <h1 className="header">Welcom to English Grammar Quiz!</h1>
            <button className="start_btn" onClick={startGame}>Let's play</button>
            <p>Top score: <span>{topScore}</span></p>
        </Card2>
    );
};
