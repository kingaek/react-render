import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    fetch("https://render-express.onrender.com/", {
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
