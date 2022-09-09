import React from "react";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./WriteCheck.css";

const WriteCheck = () => {
  return (
    <div style={{backgroundColor: "#ABC9E9", height: "1000px"}}>
      <div className="headerBg">Grammar Checker</div>
      <div className="slangIntro" style={{
          marginLeft: "320px", 
          marginTop: "30px", 
          borderRadius: "60px",
          padding: "25px",
          width: "56%",
          backgroundColor: "#98abd9"}}>
           Wondering where to improve your grammar? This grammar check feature helps you to identify any mistake made in a paragraph. 
          </div>
          <div className="titleBg" style={{
          marginLeft: "550px", 
          marginTop: "30px", 
          borderRadius: "20px",
          padding: "20px",
          width: "25%",
          backgroundColor: "#98abd9"}}>Enter your paragraph in the text box below</div>
      <div className="inputDiv">{<WritingHandler />}</div>
      <div></div>
    </div>
  );
};

export default WriteCheck;
