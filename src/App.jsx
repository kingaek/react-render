import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    fetch("http://localhost:3000/", {
      credentials: "include",
    }).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Set Cookie</button>
    </div>
  );
}

export default App;
