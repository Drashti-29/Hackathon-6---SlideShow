import React, { Component, useState } from "react";
// import "../styles/App.css";
import slides from "./data.js";
const App = () => {
  const [displayimage, setimage] = useState(slides[0].title);
  const handleReset = () => {
    setimage(slides[0].title);
  };
  const handleprev = (title) => {
    console.log("prev");
  };
  return (
    <>
      <button data-testid="button-restart" onClick={handleReset}>
        reset
      </button>
      <button
        data-testid="button-prev"
        onClick={() => handleprev(displayimage)}
      >
        previous
      </button>
      <button data-testid="button-next">next</button>
      <div>{displayimage}</div>
      {/* <slides/> */}
    </>
  );
};

export default App;
