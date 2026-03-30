import React, { useState , useEffect } from 'react'

const Useeffecthook = () => {

  const [count,setCount] = useState(0);

  // useEffect (() =>{
  //   console.log('Component rendered or count changed');    message(Task of u want to performe with refrecing website) print all load time;
  // });

  // useEffect (() =>{
  //   console.log('Component rendered or count changed');    message(Task of u want to performe with refrecing website) print one time load website;
  // },[]);

  useEffect (() =>{
    console.log('Component rendered or count changed');
    return () => { console.log("Exite from screen ")};
       // message(Task of u want to performe with refrecing website) print when update dipandancy;
  },[count]);

  return (
    <div>
      <h1>useEffect</h1>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Useeffecthook;