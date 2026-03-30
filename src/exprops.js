import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;              
  justify-content: center;    
  align-items: center;
  height: 50vh;
`;

const exprops = () => {

  const UName = "maulik";

  function Chaild  (props)  {
     return(
          <div>
            <h1>Hello, {props.username}</h1>
          </div>
      );
  };

  return (
    <Div>
        <div>
            <h1>Props Example</h1>
            <Chaild username={UName}/>
        </div>
    </Div>
  )
}

export default exprops