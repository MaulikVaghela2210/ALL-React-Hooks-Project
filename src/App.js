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
import Useref from './AllHooks/useref.js';
import UseReducerhook from './AllHooks/usereducer.js';
import Customhooks from './AllHooks/customhooks.js';
import ParentComponent from './CommanHooks/usecallbackhook.js';
import Usememohook from './CommanHooks/usememeo.js';
import Home from './home.js';

function App() {
  return (
    <InfoProvider>
    <Router>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ClassCompo" element={<ClassCompo />} />
          <Route path="/FunCompo" element={<FunCompo />} />
          <Route path="/Count" element={<Count/>} />
          <Route path="/EXJSX" element={<EXJSX/>} />
          <Route path="/Exprops" element={<Exprops/>} />
          <Route path="/Composition" element={<Composition/>} />
          <Route path="/NameList" element={<NameList/>} />
          <Route path="/Conred" element={<Conred/>} />
          <Route path="/usestate" element={<Usestatehook/>} />
          <Route path="/useeffect" element={<Useeffecthook/>} />
          <Route path="/Useref" element={<Useref/>} />
          <Route path="/UseReducerhook" element={<UseReducerhook/>} />
          <Route path="/Customhooks" element={<Customhooks/>} />
          <Route path="/ParentComponent" element={<ParentComponent/>} />
          <Route path="/Usememohook" element={<Usememohook/>} />
        </Routes>
      </div>

      <NavigationButtons />
    </Router>
    </InfoProvider>
  );
}

export default App;
