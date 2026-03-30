import React,{ useState } from "react"
import styled from 'styled-components';  // Import styled-components

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

const Counter = () => {

  const[count,setcount] = useState(0);

  const Increment= () => {
    if(count < 10){
        setcount(count + 1);
    }
  }

  const Decriment= () => {
    if(count > 0){
        setcount(count - 1);
    }
  }


  return (
    <div>
        <h1>count {count} </h1>
        <Button onClick={Increment}>Increment + </Button>
        <Button onClick={Decriment}>Decriment - </Button>
    </div>
  )
}

export default Counter;