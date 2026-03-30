import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from './AllHooks/usecontext';

// Styling for the main container
const Div = styled.div`
  display: flex;  
  flex-direction: column;            
  justify-content: flex-start;    
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px; /* Adds space around the content */
  overflow-y: auto; /* Allows vertical scrolling if content overflows */
`;

// Styling for the code block
const CodeBlock = styled.pre`
  text-align: left;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  font-family: monospace;
  white-space: pre-wrap; /* Ensures long lines wrap */
  word-wrap: break-word; /* Breaks long words if needed */
  width: 100%;
  max-width: 900px; /* Limits the width for readability */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
  margin-bottom: 20px; /* Adds space between blocks */
`;

// Home component
const Home = () => {
  const { myName, age } = useContext(UserContext);

  return (
    <Div>
        <h1>Hello! Welcome To HOME</h1>
        <h2>This is an example of UseContext:</h2>

        <h2>Create UseContext Hooks</h2>
        <CodeBlock>
{`
import React, { createContext, useContext } from "react";

// 1. Create the Context
export const UserContext = createContext();

// 2. Create the Provider Component
export const InfoProvider = ({ children }) => {
    const myName = "Maulik";
    const age = "24";

    console.log(children);

    return (
        <UserContext.Provider value={{ myName, age }}>
            {children}
        </UserContext.Provider>
    );
};
`}
        </CodeBlock>

        <h2>Get UseContext Hooks Data</h2>
        <CodeBlock>
{`
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import ClassCompo from './classcomponent';
import FunCompo from './funcomponent';
import NavigationButtons from './NavigationButtons';
import Count from './statecounter';
import EXJSX from './exjsx';
import Exprops from "./exprops";
import Composition from "./Composition";
import NameList from "./ListandKey.js";
import Conred from "./ConditionalRendering.js";
import Usestatehook from './AllHooks/usestate.js';
import Useeffecthook from './AllHooks/useeffect.js';
import { InfoProvider } from './AllHooks/usecontext.js';
import Home from './home.js';

function App() {
  return (
    <InfoProvider>  <---------hold data to used all component
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ClassCompo" element={<ClassCompo />} />
            <Route path="/FunCompo" element={<FunCompo />} />
            <Route path="/Count" element={<Count />} />
            <Route path="/EXJSX" element={<EXJSX />} />
            <Route path="/Exprops" element={<Exprops />} />
            <Route path="/Composition" element={<Composition />} />
            <Route path="/NameList" element={<NameList />} />
            <Route path="/Conred" element={<Conred />} />
            <Route path="/usestate" element={<Usestatehook />} />
            <Route path="/useeffect" element={<Useeffecthook />} />
          </Routes>
        </div>
        <NavigationButtons />
      </Router>
    </InfoProvider>
  );
}

export default App;
`}
        </CodeBlock>

        <h1>My Name is {myName}</h1>
        <h1>I am {age} years old</h1>
    </Div>
  );
};

export default Home;
