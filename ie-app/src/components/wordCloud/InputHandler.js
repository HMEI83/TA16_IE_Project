import React, { useState } from "react";

const InputHandler = () => {
  const [inputContent, setInputContent] = useState("");
  const handleInput = event => {
    setInputContent(event.target.value)
    console.log(event.target.value);
  };

  return (
    <>
      <form>
        <h1>The textarea element</h1>
        <p>
          <label>Test</label>
        </p>
        <textarea required value={inputContent} onChange={handleInput} rows="4" cols="50"></textarea>
        <button>Submit</button>
      </form>
    </>
  );
};

export default InputHandler;
