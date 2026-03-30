import React, { useState } from "react";
import styled from 'styled-components';

// Styled button component
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
  
  &:hover {
    background-color: blue;
  }
`;

const Div = styled.div`
  display: flex;              
  justify-content: center;    
  align-items: center;
  height: 50vh;
`;

const ExJSX = () => {
  const [name, setName] = useState("maulik");

  function ChangeName() {
    setName("mak"); 
  }

  return (
    <Div>
      <div>
        <h1 id="display">Name is {name}</h1>
        <Button onClick={ChangeName}>Change Name</Button>
      </div>
    </Div>
  );
};

export default ExJSX;
