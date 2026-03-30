import React, { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Without useCallback, handleClick will recreate on every render
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies, so it's memoized forever

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment Count</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      {/* Pass memoized function to ChildComponent */}
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onButtonClick }) {
  console.log("ChildComponent re-rendered");
  return <button onClick={onButtonClick}>Click from Child</button>;
}

export default ParentComponent;
