import React from "react";
import InputHandler from "../wordCloud/InputHandler";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./VocabPg.css";
import "../general/NewCard.css";

const VocabPg = () => {
  return (
    <>
    <div className="headerBg">WordCloud Visualization</div>
    <div>
      <div>
        <InputHandler />
      </div>
    </div>
    </>
  );
};

export default VocabPg;
