import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;              
  justify-content: center;    
  align-items: center;
  height: 50vh;
`;

class classComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Guest'
    };
  }

  handleChange = () => {
    this.setState({ name: 'User' });
  };

  render() {
    return (
      <Div>
        <h1>Hello, {this.state.name}!</h1>
        <button onClick={this.handleChange}>Change Name</button>
      </Div>
    );
  }
}

export default classComponent;
