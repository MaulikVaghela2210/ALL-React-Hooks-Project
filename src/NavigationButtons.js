import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

function NavigationButtons() {
  const navigate = useNavigate();  

  // Reusable navigation function
  const handleNavigation = (path) => {
    navigate(path);
  };

  const buttons = [
    { label: 'Class Component', path: '/ClassCompo' },
    { label: 'Functional Component', path: '/FunCompo' },
    { label: 'State', path: '/Count' },
    { label: 'JSX', path: '/EXJSX' },
    { label: 'Props', path: '/Exprops' },
    { label: 'Composition', path: '/Composition' },
    { label: 'List and Key', path: '/NameList' },
    { label: 'ConditionalRendering', path: '/Conred' },
    { label: 'useState', path: '/usestate' },
    { label: 'useeffect', path: '/useeffect' },
    { label: 'UseRef', path: '/Useref' },
    { label: 'useReducerHook', path: '/useReducerHook' },
    { label: 'Customhooks', path: '/Customhooks' },
    { label: 'UseCallback', path: '/ParentComponent' },
    { label: 'Usememohook', path: '/Usememohook' },
    { label: 'Home', path: '/', style: { backgroundColor: 'green' } },
  ];

  return (
    <ButtonContainer>
      {buttons.map((button, index) => (
        <Button 
          key={index} 
          onClick={() => handleNavigation(button.path)} 
          style={button.style || {}}
        >
          {button.label}
        </Button>
      ))}
    </ButtonContainer>
  );
}

export default NavigationButtons;
