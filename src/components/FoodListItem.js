import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

class FoodListItem extends Component {
    static propTypes = {
        food: PropTypes.object.isRequired,
        toggleIsDelicious: PropTypes.func.isRequired,
        toggleIsHealthy: PropTypes.func.isRequired,
        id: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired
    };

    render() {
        const { food, className, id, toggleIsDelicious, toggleIsHealthy} = this.props;

        return (
        <tr className={className}> 
            <td>{food.label}</td>
            <td>
                <input 
                    onChange={ () => (toggleIsDelicious(id))} 
                    type="checkbox" 
                    defaultChecked={food.isDelicious}/>
            </td>
            <td>
                <input  
                    onChange={ () => (toggleIsHealthy(id))}
                    type="checkbox" 
                    defaultChecked={food.isHealthy}/>
            </td>
        </tr>
        );
    }
}

export const StyledFoodListItem = styled(FoodListItem)`
  td {
    transition: background-color 0.7s ease,
        padding 0.8s linear;
    padding: ${props => props.theme.table.spacing.default};
    border-bottom: 1px solid ${props => props.theme.table.color.border};
    background-color: ${props => props.food.isHealthy ?  props.theme.table.color.background.isHealthy : props.theme.table.color.background.default}
  }
  
  td {
    text-align: center;
  }
  
  td:first-child {
    text-align: left;
    padding-left: ${props => props.food.isDelicious ? props.theme.table.spacing.isDelicious : props.theme.table.spacing.default};
  }
`;


export default StyledFoodListItem;