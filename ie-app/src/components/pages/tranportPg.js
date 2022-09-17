import React, { useState } from "react";
import "./transportationPg.css";
import Accordion from "./Accordion";

const Transport = () => {
  const [peakValue, setpeakValue] = useState(0);
  const [offPeakValue, setOffPeakValue] = useState(0);
  const [weekendsValue, setWeakendsValue] = useState(0);

  const handleChangePeak = (event) => {
    setpeakValue(event.target.value);
  };

  const handleChangeOffPeak = (event) => {
    setOffPeakValue(event.target.value);
  };
  const handleChangeWeekends = (event) => {
    setWeakendsValue(event.target.value);
  };

  

  return (
    <div>
          <div className="container">
      <Accordion />
    </div>
      <br></br>
      <div className="main-myki">
        <p>
          Here's an attempted quick calculator to work out your weekly Myki
          Money fare, based on the number of days per week you travel at
          different times:
        </p>
        <br />
        <p>
          <label>Peak weekdays:</label>
          <input
            className="input-label"
            type="number"
            min="0"
            max="5"
            onChange={handleChangePeak}
            value={peakValue}
          />
          @ $9.00
        </p>
        <br />
        <p>
          <label>off-peak weekdays:</label>
          <input
            className="input-label"
            type="number"
            min="0"
            max="5"
            onChange={handleChangeOffPeak}
            value={offPeakValue}
          />
          @ $6.30
        </p>
        <br />
        <p>
          <label>Weekends:</label>
          <input
            className="input-label"
            type="number"
            min="0"
            max="2"
            onChange={handleChangeWeekends}
            value={weekendsValue}
          />
          @ $6.50
        </p>
        <br />

        <p>
          <label>Myki Money cost per week:</label>
          <strong>
            <span>
              {" "}
              ${peakValue * 9.0 + offPeakValue * 6.3 + weekendsValue * 6.5}
            </span>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Transport;
