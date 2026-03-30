import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;              
  justify-content: center;    
  align-items: center;
  height: 50vh;
`;

function Funcomponent() {
  const [name, setName] = useState('Guest'); 

  const handleChange = () => {
    setName('User');
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={handleChange}>Change Name</button>
    </div>
  );
}

export default Funcomponent;
