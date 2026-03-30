import React, { useState, useRef } from 'react';

const Useref = () => {
  const countRef = useRef(0); // Initial value set to 0
  const [count, setCount] = useState(0);

  const increment = () => {
    countRef.current += 1; // It increments without causing re-render
    console.log("Ref Count:", countRef.current); 
  };

  const renderCount = () => {
    setCount(count + 1); // It will cause a re-render and update the displayed count
  };

  return (
    <div>
      <h1>State Count: {count}</h1>
      <h2>Ref Count: {countRef.current}</h2>
      <button onClick={increment}>Increment (Ref)</button>
      <button onClick={renderCount}>Increment (State)</button>
    </div>
  );
};

export default Useref;
