import React from "react";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./WriteCheck.css";

const WriteCheck = () => {
  return (
    <div>
      <div className="headerBg">Grammar Checker</div>
      <div className="headContent">
        For the new learners, we have a special offer. You can practice spelling
        characters in this box, we provide grammar check features. In this way,
        you cannot get bored with grammar as you learn it. Come and try it on!
      </div>
      <div className="writingTitleDIv">Writing Check</div>
      <div className="inputDiv">{<WritingHandler />}</div>
      <div></div>
    </div>
  );
};

export default WriteCheck;
