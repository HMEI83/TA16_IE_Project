import React from "react";
import "../../App.css";
import InfoSection from "./infoSection/infos";
import { lifeObj, learnObj, socialObj } from "./infoSection/data";
import homebg from "../../images/homeBg.jpg";
import homeIcon1 from "../../images/homeIcon1.png";
import homeIcon2 from "../../images/homeIcon2.png";
import homeIcon3 from "../../images/homeIcon3.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <img className="homebg" src={homebg} alt="home" />
        </div>
        <div className="homepageDivider">
          <div className="titlePos">
            <h1>
              <span id="home-content1">Start A New Journey</span>
            </h1>
            <h1>
              <span id="home-content2">Study in Victoria</span>
            </h1>
          </div>
        </div>
        <div className="homepageDivider2">
          <div className="IconDivider">
            <div className="SingleIcon">
              <p className="IconP" style={{ marginLeft: "50px", fontSize:"22px" }}>
                Number of Chinese students abroad
              </p>
              <img src={homeIcon1} style={{ marginLeft: "65px" }} />
              <div className="IconP1">
              <CountUp start={0} end={1.27} duration={2.75} decimals={2} suffix={" million"}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef}  style={{fontSize:"24px"}}/>
                  </VisibilitySensor>
                )}
              </CountUp>
              </div>
              {/* <p className="IconP1" style={{ marginLeft: "125px" }}>
                1.27 million
              </p> */}
            </div>
            <div className="SingleIcon">
              <p className="IconP" style={{fontSize:"22px"}}>International Student Tertiary enrolments</p>
              <img src={homeIcon2} style={{ marginLeft: "37px" }} />
              <div className="IconP1">
              <CountUp start={0} end={21} duration={2.75} suffix={"%"}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef}  style={{fontSize:"24px"}}/>
                  </VisibilitySensor>
                )}
              </CountUp>
              </div>
              {/* <p className="IconP1" style={{ marginLeft: "122px" }}>
                21%
              </p> */}
            </div>
            <div className="SingleIcon">
              <p className="IconP" style={{ marginLeft: "-3px" , fontSize:"22px"}}>
                Expect to increase
              </p>
              <img src={homeIcon3} style={{ marginLeft: "-29px" }} />
              <div className="IconP1">
              <CountUp start={0} end={17.65} duration={2.75} decimals={2} suffix={"%"}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef}  style={{fontSize:"24px"}}/>
                  </VisibilitySensor>
                )}
              </CountUp>
              </div>
              {/* <p className="IconP1" style={{ marginLeft: "69px" }}>
                17.65%
              </p> */}
            </div>
          </div>
        </div>
        <div className="homepageDivider3">
          <div className="aboutSection">
            <div style={{ marginTop: "5%", position: "absolute" }}>
              <h1 className="aboutH" style={{ marginLeft: "28%" }}>
                About
              </h1>
              <br></br>
              <p className="aboutP" style={{ marginLeft: "28%" }}>
                This website is here to help young international students who
                are just landing in this foreign country
              </p>
              <br></br>
              <p className="aboutP" style={{ marginLeft: "28%" }}>
                Curious to learn more? Get an understading of "Life in AU",
                "Learning English" and "Explore Local Culture"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home">
        {/* <div className="IconDivider" style={{backgroudColor: "#FFF4E2"}}>
          <div className="SingleIcon">
            <p className="IconP" style={{marginLeft: "50px"}}>Number of Chinese students abroad</p>
            <img src={homeIcon1} style={{marginLeft: "65px"}}/>
            <p className="IconP1" style={{marginLeft: "125px"}}>1.27 million</p>
          </div>
          <div className="SingleIcon">
            <p className="IconP">International Student Tertiary enrolments</p>
            <img src={homeIcon2} style={{marginLeft: "37px"}}/>
            <p className="IconP1" style={{marginLeft: "122px"}}>21%</p>
          </div>
          <div className="SingleIcon">
            <p className="IconP" style={{marginLeft: "-3px"}}>Expect to increase</p>
            <img src={homeIcon3} style={{marginLeft: "-29px"}}/>
            <p className="IconP1" style={{marginLeft: "69px"}}>17.65%</p>
          </div>
        </div> */}
        {/* <div className="aboutSection">
          <h1 className="aboutH" style={{ marginLeft: "25%" }}>
            About
          </h1>
          <br></br>
          <p className="aboutP" style={{ marginLeft: "25%" }}>
            This website is here to help young international students who are
            just landing in this foreign country
          </p>
          <br></br>
          <p className="aboutP" style={{ marginLeft: "25%" }}>
            Curious to learn more? Get an understading of "Life in AU",
            "Learning English" and "Explore Local Culture"
          </p>
        </div> */}
      </div>
      <AnimationOnScroll
        animateOnce={true}
        duration={1.5}
        animateIn="animate__fadeInDown"
      >
        <InfoSection {...lifeObj} />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        duration={1.8}
        animateIn="animate__fadeInDown"
      >
        <InfoSection {...learnObj} />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateOnce={true}
        duration={2.1}
        animateIn="animate__fadeInDown"
      >
        <InfoSection {...socialObj} />
      </AnimationOnScroll>
    </>
  );
}
