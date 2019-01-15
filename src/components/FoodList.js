import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FoodListItem from './FoodListItem';
import * as FoodActions from '../store/actions';

class  FoodList extends Component {
  static propTypes = {
    foods: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
  };

  render() {
    const { className, foods, actions } = this.props;

    return (
      <table className={className}>
        <thead>
          <tr>
          <th>Food</th>
          <th>Delicious</th>
          <th>Heathy</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(foods).map( (key) => {
            return (<FoodListItem food={foods[key]} key={key} id={key} {...actions} />);
          })}
        </tbody>
      </table>)
  }
}


const StyledFoodList = styled(FoodList)`

  width: 100%;
  border-collapse: collapse;
  font-size: 1em;
  
  th:first-child {
    text-align: left;
  }
  
  th {
    font-size: 1em;
    font-weight: 600;
    border-bottom: 2px solid ${props => props.theme.table.color.border};
    padding: ${props => props.theme.table.spacing.default};
  }
`;

const mapStateToProps = state => ({
  foods: state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(FoodActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledFoodList);