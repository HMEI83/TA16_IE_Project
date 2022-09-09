import React, { useEffect, useState } from "react";
import "./bankPg.css";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

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
      </p><br/>
      </div>
    ),
    note: "Note: You can only get points for one item in this section"
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
      </p><br/>
      </div>
    ),
    note: "Note: These cards must have a photograph or signature"
  },
  { name: (
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
      <br />
      · Video Store Card
    </p><br/>
    </div>
  ),
},
  { name: (
    <div className="checkBoxSection">
    <p>
      Other documents on which your name and address appear:
      <br />
      · Car registration
      <br />
      · Rental receipts
      <br />
      · Utility bill
    </p>
    </div>
  ),
},
];

const BankPg = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };


  return (

    <div className="main-checkBox">
      <form className="form w-100">
        <h3>Documents Required</h3>
        {users.map((user, index) => (
          <div key={index} className="checkBoxDiv">
            <FormControlLabel
              control={<Checkbox/>}
              label={user.name}
            />
            <Tooltip title={user.note}>
              <ContactSupportIcon sx={{ m: 0 }}>
                Default Width [300px]
              </ContactSupportIcon>
            </Tooltip>
          </div>
        ))}
      </form>
    </div>
  );
};

export default BankPg;
