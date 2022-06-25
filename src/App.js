// import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
// import { render } from "@testing-library/react";

function App() {
  // this.state = {
  //   backgrounColor: "white",
  // };
  const [count, setCount] = useState("white");

  function printstate() {
    if (count === "white") {
      setCount("black");
    } else {
      setCount("white");
    }
  }

  return (
    <>
      <div className={count === "white" ? "white" : "black"}>
        <button className="btn-theme" onClick={printstate}>
          change theme
        </button>
      </div>
    </>
  );
}

export default App;
