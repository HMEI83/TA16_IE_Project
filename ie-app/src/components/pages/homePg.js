import React from "react";
import "../../App.css";
import { Button2 } from "../general/Button";
import InfoSection from "./infoSection/infos";
import { aboutObj, lifeObj, learnObj, socialObj } from "./infoSection/data";
import homebg from "../../images/homeBg.jpg";
import homeIcon1 from "../../images/homeIcon1.png";
import homeIcon2 from "../../images/homeIcon2.png";
import homeIcon3 from "../../images/homeIcon3.png";
import lifePic from "../../images/life.jpg";

export default function Home() {
  return (
    <>
      <div>
        <div>
        <img className="homebg" src={homebg} alt="home" />
        </div>
        <div className="homepageDivider"></div>
        <div className="homepageDivider2"></div>
        <div className="homepageDivider3"></div>
      </div>
      <div className="home">
        <h1>
          <span id="home-content1">Start A New Journey</span>
        </h1>
        <div >
          <h1>
            <span id="home-content2">Study in Victoria</span>
          </h1>
        </div>
        <div className="IconDivider">
          <div className="SingleIcon">
            <p className="IconP">Number of Chinese students abroad</p>
            <img src={homeIcon1} />
            <p className="IconP1">1.27 million</p>
          </div>
          <div className="SingleIcon">
            <p className="IconP">International Student Tertiary enrolments</p>
            <img src={homeIcon2} />
            <p className="IconP1">21%</p>
          </div>
          <div className="SingleIcon">
            <p className="IconP">Expect to increase</p>
            <img src={homeIcon3} />
            <p className="IconP1">17.65%</p>
          </div>
        </div>
        <div className="aboutSection">
          <h1 className="aboutH">About</h1>
          <br></br>
          <p className="aboutP">This website is here to help young international students who are just landing in this foreign country</p>
          <br></br>
          <p className="aboutP">Curious to learn more? Get an understading of "Life in AU", "Learning English" and "Explore Local Culture"</p>
        </div>
      </div>
      <InfoSection {...aboutObj} />
      <InfoSection {...lifeObj} />
      <InfoSection {...learnObj} />
      <InfoSection {...socialObj} />
    </>
  );
}
