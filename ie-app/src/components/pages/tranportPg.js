import React, { useState } from "react";
import "./transportationPg.css";
import Accordion from "./Accordion";

const Transport = () => {
  var map = {};
  map["full fare"] = 1;
  map["concession"] = 2;
  map["weekday"] = 4;
  map["weekend"] = 5;
  map["public holiday"] = 5;
  map["daily fare"] = 6;
  map["2 hour fare"] = 7;
  map["zone1"] = 8;
  map["zone2"] = 9;
  map["zone12"] = 10;

  map[(1 << 1) | (1 << 4) | (1 << 6) | (1 << 8)] = 9.2;
  map[(1 << 1) | (1 << 4) | (1 << 6) | (1 << 9)] = 6.2;
  map[(1 << 1) | (1 << 4) | (1 << 6) | (1 << 10)] = 9.2;
  map[(1 << 1) | (1 << 4) | (1 << 7) | (1 << 8)] = 4.6;
  map[(1 << 1) | (1 << 4) | (1 << 7) | (1 << 9)] = 3.1;
  map[(1 << 1) | (1 << 4) | (1 << 7) | (1 << 10)] = 4.6;
  map[(1 << 1) | (1 << 5) | (1 << 6) | (1 << 8)] = 6.7;
  map[(1 << 1) | (1 << 5) | (1 << 6) | (1 << 9)] = 6.2;
  map[(1 << 1) | (1 << 5) | (1 << 6) | (1 << 10)] = 6.7;
  map[(1 << 1) | (1 << 5) | (1 << 7) | (1 << 8)] = 4.6;
  map[(1 << 1) | (1 << 5) | (1 << 7) | (1 << 9)] = 3.1;
  map[(1 << 1) | (1 << 5) | (1 << 7) | (1 << 10)] = 4.6;

  map[(1 << 2) | (1 << 4) | (1 << 6) | (1 << 8)] = 4.6;
  map[(1 << 2) | (1 << 4) | (1 << 6) | (1 << 9)] = 3.1;
  map[(1 << 2) | (1 << 4) | (1 << 6) | (1 << 10)] = 4.6;
  map[(1 << 2) | (1 << 4) | (1 << 7) | (1 << 8)] = 2.3;
  map[(1 << 2) | (1 << 4) | (1 << 7) | (1 << 9)] = 1.55;
  map[(1 << 2) | (1 << 4) | (1 << 7) | (1 << 10)] = 2.3;
  map[(1 << 2) | (1 << 5) | (1 << 6) | (1 << 8)] = 3.35;
  map[(1 << 2) | (1 << 5) | (1 << 6) | (1 << 9)] = 3.1;
  map[(1 << 2) | (1 << 5) | (1 << 6) | (1 << 10)] = 3.35;
  map[(1 << 2) | (1 << 5) | (1 << 7) | (1 << 8)] = 2.3;
  map[(1 << 2) | (1 << 5) | (1 << 7) | (1 << 9)] = 1.55;
  map[(1 << 2) | (1 << 5) | (1 << 7) | (1 << 10)] = 2.3;


  const [option1, setOption1] = useState("full fare");
  const [option2, setOption2] = useState("weekday");
  const [option3, setOption3] = useState("daily fare");
  const [option4, setOption4] = useState("zone1");
  const [result, setResult] = useState(9.20);

  const handleChangeOption1 = (event) => {
    setOption1(event.target.value);
  };

  const handleChangeOption2 = (event) => {
    setOption2(event.target.value);
  };
  const handleChangeOption3 = (event) => {
    setOption3(event.target.value);
  };
  const handleChangeOption4 = (event) => {
    setOption4(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(map[(1 << map[option1]) | (1 << map[option2]) | (1 << map[option3]) | (1 << map[option4])]);
    console.log(map[option1], map[option2], map[option3], map[option4]);
  };

  const options1 = [
    {
      label: "Full fare",
      value: "full fare",
    },
    {
      label: "Concession",
      value: "concession",
    },
  ];

  const options2 = [
    {
      label: "Weekday",
      value: "weekday",
    },
    {
      label: "Weekend",
      value: "weekend",
    },
    {
      label: "Public Holiday",
      value: "public holiday",
    },
  ];

  const options3 = [
    {
      label: "Daily fare",
      value: "daily fare",
    },
    {
      label: "2 hour fare",
      value: "2 hour fare",
    },
  ];

  const options4 = [
    {
      label: "Zone1",
      value: "zone1",
    },
    {
      label: "Zone2",
      value: "zone2",
    },
    {
      label: "Zone 1 & 2",
      value: "zone12",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F0BA98", height: "1780px" }}>
      <div className="headerBg">Public Transport in Victoria</div>
      <div className="container">
        <Accordion />
      </div>
      <br></br>
      <div className="main-myki">
        <form onSubmit={handleSubmit}>
          <div>
            <h2>1. Select a fare type</h2>
            <select value={option1} onChange={handleChangeOption1}>
              {options1.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div>
            <h2>2. Select a day</h2>
            <select value={option2} onChange={handleChangeOption2}>
              {options2.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div>
            <h2>3. Select a product</h2>
            <select  value={option3} onChange={handleChangeOption3}>
              {options3.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div>
            <h2>4. Select a Zone</h2>
            <select value={option4} onChange={handleChangeOption4}>
              {options4.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <button type="submit">Calculate fare</button>
        </form>
        <div>
          {result}
        </div>
      </div>
    </div>
  );
};

export default Transport;
