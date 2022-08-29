import React, { useState } from "react";

const WritingHandler = () => {
  const [values, setValues] = useState("");

  const handleInputContent = (event) => {
    setValues(event.target.value);
  };

  const getSuggestions = (inputValue) => {
    var writeGood = require("write-good");
    var suggestions = writeGood(inputValue);
    return suggestions;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setValues("");
  };

  return (
    <div>
      <textarea
        className="text-area"
        rows="5"
        cols="50"
        placeholder="type something"
        type="text"
        value={values}
        onChange={handleInputContent}
      />

      <button type="submit" onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default WritingHandler;
