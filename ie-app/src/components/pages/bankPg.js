import React, { useEffect, useState } from "react";
import "./bankPg.css";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../general/BankCard.css";
import Chart from "react-apexcharts";
import { Slide,Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import COMM from "../../images/common.webp";
import ANZ from "../../images/ANZ.jpeg";
import WEST from "../../images/west.jpg";
import NBA from "../../images/nba.webp";
import { height } from "@mui/system";

const slideImages = [COMM, ANZ, WEST, NBA];


const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...zoomOutProperties}>
        {slideImages.map((each, index) => (
          <img key={index} style={{ width: "100%", height: "30rem", objectFit: "contain"}} src={each} />
        ))}
      </Slide>
    </div>
  );
};

// const bankDesc = [
//   {
//     id: 1,
//     name: "Commonwealth Bank of Australia",
//     desc: "The Commonwealth Bank of Australia (CBA), or CommBank, is an Australian multinational bank with businesses across New Zealand, Asia, the United States and the United Kingdom. It provides a variety of financial services including retail, business and institutional banking, funds management, superannuation, insurance, investment and broking services. The Commonwealth Bank is the largest Australian listed company on the Australian Securities Exchange as of August 2015 with brands including Bankwest, Colonial First State Investments, ASB Bank (New Zealand), Commonwealth Securities (CommSec) and Commonwealth Insurance (CommInsure).",
//   },
//   {
//     id: 2,
//     name: "Westpac Banking Corporation",
//     desc: "Westpac Banking Corporation, known simply as Westpac, is an Australian bank and financial services provider headquartered in Sydney, Australia.[2] Established in 1817 as the Bank of New South Wales, it acquired the Commercial Bank of Australia in 1982 before being renamed shortly afterwards. It is one of Australia's 'big four' banks and is Australia's first and oldest banking institution. Its name is a portmanteau of 'Western' and 'Pacific'.",
//   },
//   {
//     id: 3,
//     name: "National australia bank",
//     desc: "National Australia Bank (abbreviated NAB, branded nab) is one of the four largest financial institutions in Australia (colloquially referred to as 'The Big Four') in terms of market capitalisation, earnings and customers. NAB was ranked 21st-largest bank in the world measured by market capitalisation and 52nd-largest bank in the world as measured by total assets in 2019. As of January 2019, NAB operated 3,500 Bank@Post locations—including 7,000+ ATMs across Australia, New Zealand, and Asia—and served 9 million customers.",
//   },
//   {
//     id: 4,
//     name: "Australia and New Zealand banking group",
//     desc: "Its current corporate entity was established on 1 October 1970, when the Australia and New Zealand Bank (ANZ) merged with the English, Scottish & Australian Bank (ES&A). It was the largest bank merger in Australian history at the time. The Australia and New Zealand Bank had in turn been founded in 1951 as a merger of the Bank of Australasia and the Union Bank of Australia, which were established in 1835 and 1837 respectively. ANZ is one of the big four Australian banks, along with the Commonwealth Bank, National Australia Bank and Westpac.",
//   },
// ];

const accounts = [
  {
    id: 1,
    type: "The transaction account",
    explain:
      "The transaction account is the most common account that can be used for daily expenses, deposits, money access, shopping, paying off bills, and withdrawing money from an ATM.",
    color: "#77AADA",
  },
  {
    id: 2,
    type: "The savings account",
    explain:
      "The savings account is a ready to go account, which is linked to your everyday bank account. It is different from the transaction account as it allows you to earn interest on your balance.",
    color: "#5f7fbf",
  },
  {
    id: 3,
    type: "The student account ",
    explain:
      "The student account comes with the same features as a transaction account but has some extra perks. For example, you don't pay any fees when you deposit cash or withdraw from an ATM on a monthly or annual basis.",
    color: "#BAE1F2",
  },
];

const userData = [
  {
    name: (
      <div className="checkBoxSection">
        <p>
          Passport
          <br />
          Citizenship
          <br />
          Birth Certificate
        </p>
        <br />
      </div>
    ),
    note: "Note: You can only get points for one item in this section",
  },
  {
    name: (
      <div className="checkBoxSection">
        <p>
          Student card
          <br />
          or Proof of age card
          <br />
          or Australian Drivers Licence
          <br />
          or Confirmation of enrolment(COE)
          <br />
          or Health care card
          <br />
          or Health insurance document
        </p>
        <br />
      </div>
    ),
    note: "Note: These cards must have a photograph or signature",
  },
  {
    name: (
      <div className="checkBoxSection">
        <p>
          Any card with your name on it:
          <br />
          · Store account card
          <br />
          · Library card
          <br />
          · Credit card
          <br />
          · Union card
          <br />
          · Medicare card
          <br />· Video Store Card
        </p>
        <br />
      </div>
    ),
    note: "Example: Monash Student Card",
  },
  {
    name: (
      <div className="checkBoxSection">
        <p>
          Other documents on which your name and address appear:
          <br />
          · Car registration
          <br />
          · Rental receipts
          <br />· Utility bill
        </p>
      </div>
    ),
    note: "Example: Water bill with name and address",
  },
];

const BankPg = () => {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="mainBankPage">

        <div className="slideLayout">
        <Slideshow />
        </div>


       
      
        <div className="bankCardLayout">
          {accounts.map((account) => (
            <div class="bankcard">
              <div style={{ backgroundColor: account.color }} class="content">
                <div class="front">
                  <h3 class="title">{account.type}</h3>
                  <p class="subtitle">Hover me :)</p>
                </div>

                <div style={{ backgroundColor: account.color }} class="back">
                  <p class="description">{account.explain}</p>
                </div>
              </div>
              <div className="type-name">{account.type}</div>
            </div>
            
          ))}
        </div>

        {/* <div className="vl"></div> */}
        <div className="checkListBg">
        <div className="main-checkBox">
          <form className="form w-100">
            <h3>Documents Required</h3>
            {userData.map((user, index) => (
              <div key={index} className="checkBoxDiv">
                <FormControlLabel control={<Checkbox />} label={user.name} />
                <Tooltip title={user.note}>
                  <ContactSupportIcon sx={{ m: 0 }}>
                    Default Width [300px]
                  </ContactSupportIcon>
                </Tooltip>
              </div>
            ))}
          </form>
        </div>
        </div>

        <div className="chartLayout">
          <div className="container-fluid mt-3 mb-3">
            <h2 className="text-left">Donut Chart</h2>
            <Chart
              type="donut"
              width={1349}
              height={550}
              series={[17, 14, 9, 8.5]}
              options={{
                labels: [
                  "Commonwealth Bank of Australia (CBA)",
                  "Westpac Banking Corporation (WBC)",
                  "National Australia Bank (NBA)",
                  "Australia and NEW Zealand Banking Group (ANZ)",
                ],
                title: {
                  text: "Number of customers at the big four banks in Australia(in millions)",
                },

                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: true,
                        total: {
                          show: true,
                          // showAlways: true,
                          //formatter: () => '343',
                          fontSize: 15,
                          color: "#f90000",
                        },
                      },
                    },
                  },
                },

                dataLabels: {
                  enabled: true,
                },
              }}
            />
          </div>
          <a href='../../IACR.pdf' download>Click to download</a>
        </div>
      </div>
    </div>
  );
};

export default BankPg;
