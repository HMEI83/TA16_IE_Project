import React from "react";
import InputHandler from "../wordCloud/InputHandler";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./VocabPg.css";
import "../general/NewCard.css";


const VocabPg = () => {
    return (
        <div>
            <div className="VocabPgBg"></div>
                    <div className="newCard">
                        <div className="content">
                            <div className="front">
                                <h3 className="title">Welcome to our word cloud and have fun. </h3>
                                <p className="subtitle">Hover me :)</p>
                            </div>

                            <div className="back">
                                <p className="description">
                                    Cool description so you can read it too my friend
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cloud">
                        <InputHandler />
                    </div>

                    <div className="newCard1">
                        <div className="content">
                            <div className="front">
                                <h3 className="title">Hello</h3>
                                <p className="subtitle">Hover me :)</p>
                            </div>

                            <div className="back">
                                <p className="description">
                                    Cool description so you can read it too my friend
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="writingAss">
                        <WritingHandler />
                    </div>
            </div>
    )
}

export default VocabPg;