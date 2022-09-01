import React from "react";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./WriteCheck.css";

const WriteCheck = () => {
    return (
        <div>
            <div className="headContent">Welcome to our word cloud and have fun.
                We want to make our website more interesting and encourage users to interact with us. Whether you want to learn English or keep up with Australian news, enter some words so that you can see the word frequency. For example, if you copy an article into this box, you can see the keywords, it is the word that appears most frequently in the article
            </div>
            <div className="writingTitleDIv">Writing Check</div>
            <div className="inputDiv">{<WritingHandler/>}</div>
            <div></div>
        </div>
    );
}

export default WriteCheck;