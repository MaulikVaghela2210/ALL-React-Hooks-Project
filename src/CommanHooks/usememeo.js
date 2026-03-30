import React, { useState, useMemo } from "react";

function Usememohook() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // Expensive calculation function
  const expensiveCalculation = (num) => {
    console.log("Performing expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Memoized value
  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Expensive Calculation Result: {memoizedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default Usememohook;
