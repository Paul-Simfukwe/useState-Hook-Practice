import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("16:00:01");

  function increaseTime() {
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    setTime(currentTime);
  }
  setInterval(increaseTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={increaseTime}>Get Time</button>
    </div>
  );
}

export default App;
