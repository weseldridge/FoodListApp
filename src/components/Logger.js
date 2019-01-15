import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from 'react-redux';

import Button from './Button';

class Logger extends Component {
  static propTypes = {
    foods: PropTypes.object.isRequired,
  };

  log = () => {
      const {foods} = this.props;

      const foodArray = Object.keys(foods).map(key => {
          return {
              id: key,
              lable: foods[key].label,
              isDelicious: foods[key].isDelicious,
              isHealthy: foods[key].isHealthy,
          }
      });

      console.table(foodArray);
  }
  
  render() {
  
    const { className } = this.props;
    
    return (
      <div className={className}>
          <Button onClick={this.log}>Log Foods</Button>
      </div>
    );
  }
}

export const StyledLogger = styled(Logger)`
  text-align: right;
  padding: 0.75em 0;
`

const mapStateToProps = state => ({
  foods: state
});

export default connect(
  mapStateToProps
)(StyledLogger);