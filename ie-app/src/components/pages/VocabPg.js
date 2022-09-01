import React from "react";
import InputHandler from "../wordCloud/InputHandler";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./VocabPg.css";
import "../general/NewCard.css";


const VocabPg = () => {
    return (
        <div>
            <div></div>
            <div className="VocabLayout">
                <div className="cloud">
                    <InputHandler />
                </div>
                {/* <div className="writingAss">
                    <WritingHandler />
                </div> */}
            </div>



        </div>
    )
}

export default VocabPg;