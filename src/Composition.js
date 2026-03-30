import React from "react";


const Card = (props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px" }}>
      <h2>Card Title</h2>
      
      <div>{props.children}</div>
    </div>
  );
};

const Composition = () => {
  return (
    <div>
      <h1>Composition Example</h1>
      <Card>
        <p>This is some content inside the first card.</p>
      </Card>
      <Card>
        <button>Click Me!</button>
      </Card>
    </div>
  );
};

export default Composition;
