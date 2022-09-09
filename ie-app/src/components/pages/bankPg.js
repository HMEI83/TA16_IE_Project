import React, { useEffect, useState } from "react";
import "./bankPg.css";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../general/BankCard.css";

const accounts = [
  {
    id: 1,
    type: "The transaction account",
    explain:
      "The transaction account is the most common account that can be used for daily expenses, deposits, money access, shopping, paying off bills, and withdrawing money from an ATM.",
      color: "#77AADA"
  },
  {
    id: 2,
    type: "The savings account",
    explain:
      "The savings account is a ready to go account, which is linked to your everyday bank account. It is different from the transaction account as it allows you to earn interest on your balance.",
      color: "#5f7fbf"
  },
  {
    id: 3,
    type: "The student account ",
    explain:
      "The student account comes with the same features as a transaction account but has some extra perks. For example, you don't pay any fees when you deposit cash or withdraw from an ATM on a monthly or annual basis.",
      color: "#BAE1F2"
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

  useEffect(() => {
    setUsers(userData);
  }, []);

  return (
    <div className="mainBankPage">
        
      <div className="bankCardLatout">
        {accounts.map((account) => (
             <div class="card">
             <div style={{backgroundColor: account.color}} class="content">
                 <div class="front">
                     <h3 class="title">{account.type}</h3>
                     <p class="subtitle">Hover me :)</p>
                 </div>
      
                 <div style={{backgroundColor: account.color}} class="back">
                     <p class="description">
                         {account.explain}
                     </p>
                 </div>
             </div>
         </div>
        ))}
      </div>

      <div className="vl"></div>
      <div className="main-checkBox">
        <form className="form w-100">
          <h3>Documents Required</h3>
          {users.map((user, index) => (
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
  );
};

export default BankPg;
