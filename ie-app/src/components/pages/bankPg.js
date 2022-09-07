import React, { useEffect, useState } from "react";
import "./bankPg.css";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

const userData = [
  { name: "Passport / Citizenship / Birth Certificate" },
  {
    name: "University /TAFE / College student card, Proof of age card / Australian Drivers Licence, Confirmation of enrolment from your education institution, Health care card or Health insurance document",
  },
  { name: "Any card with your name on it" },
  { name: "Other documents on which your name and address appear:" },
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
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.name}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
            <ContactSupportIcon />
          </div>
        ))}
      </form>
    </div>
  );
};

export default BankPg;
