import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;     
  flex-direction:column;     
  justify-content: center;    
  align-items: center;
  height: 50vh;
`;

function ConditionalRenderingExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Div>
      <h1>Welcome to Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in!</p>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      )}
    </Div>
  );
}

export default ConditionalRenderingExample;
