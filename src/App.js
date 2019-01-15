import React, { Component } from 'react';
import styled from "styled-components";

import Logger from './components/Logger';
import FoodList from './components/FoodList';

class App extends Component {
  render() {
    const { className } = this.props;
    
    return (
      <div className={className}>
        <h1>Foods</h1>
        <FoodList />
        <Logger />
    </div>
    );
  }
}

export const StyledApp = styled(App)`
  font-family: ${props => props.theme.font.face};
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  
  h1 {
    font-size: 3.5em;
    font-weight: 300;
    text-align: center;
  }
`;

export default StyledApp;
