import React, { useState } from "react";
import {FinalSlangPage} from "../quizzes/FinalPage";
import {SlangQuestionPage} from "../quizzes/QuestionPage";
import {SlangStartingPage} from "../quizzes/StartingPage";
import "./quiz.css";
import {slangqs} from "../quizzes/questions";

const SlangQuiz = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  const [answerRecord, setAnswerRecord] = useState({q1:0, q2:0, q3:0, q4:0, q5:0, q6:0, q7:0, q8:0, q9:0, q10:0});

  const handleRecord = (ind) => {
    var q = "q" + ind;
    setAnswerRecord({...answerRecord, [q] : 1});
  }
  return (
    <>
      <div className="headerBg">Australia Slang Test</div>
    <div className="slangTotal">
      <div className="slangBackgroud">
        <h3 className="aussieH">How To Speak Australian</h3>
        <p className="aussieP">
          Once you've been in Australia for, well, an hour, you'll notice that
          nearly every word has an 'o' on the end of it. This is because for
          some weird reason Australians like to shorten every word and then add
          a vowel to the end of it… e.g. “bottle-o” (Bottle shop / off license)
          “servo” (garage / service station). Oddly though, some of these words
          end up being longer than they were originally. At other times they'll
          just add a different vowel instead of the 'o'. MacDonalds, you know
          that famous fast food burger joint, is only known as Macca's over
          here! I think the video below perfectly illustrates this unique way of
          speaking Australian!
        </p>
        <iframe
          title="How to speak Australian"
          width="580"
          height="345"
          src="https://www.youtube.com/embed/yDb_WsAt_Z0?feature=oembed&enablejsapi=1&origin=https://nomadsworld.com"
        ></iframe>
        <h3 className="aussieH">Australian Phrases and Sayings</h3>
        <p className="aussieP">
          Some phrases can be a bit more difficult to work out than the
          abbreviations Australians use. When someone exclaimed to me: “OMG
          check out his budgie smugglers” I really had absolutely no clue what
          they were talking about. Let's just say it only refers to men, and
          they tend to be wearing speedos! I was at the bar and my friend says
          “it's my shout mate“. Huh?! This is an important one to know. If it's
          their shout they're going to be paying. Another common one to hear at
          the pub is “he's blotto“… Yeah don't buy that guy another drink he's
          already had too many!
        </p>
      </div>

      <div className="slangPage">
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
              handleRecord = {handleRecord}
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
              setAnswerRecord = {setAnswerRecord}
              record = {answerRecord}
              questions={slangqs}
            />
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default SlangQuiz;
