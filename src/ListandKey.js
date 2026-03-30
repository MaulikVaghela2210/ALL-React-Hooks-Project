import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;     
  flex-direction:column;     
  justify-content: center;    
  align-items: center;
  height: 50vh;
`

function NameList() {
  const names = ['Rahul', 'Priya', 'Aman'];

  return (
    <Div>
      <h3>Student Names:</h3>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li> 
        ))}
      </ul>
    </Div>
  );
}

export default NameList;
