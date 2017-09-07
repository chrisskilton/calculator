import * as ACTION_TYPES from '../constants/actionTypes';
import * as OPERATORS from '../constants/operators';

export const add = () => {
    return {
        type: ACTION_TYPES.OPERATOR,
        operator: OPERATORS.ADD
    };
};
export const subtract = () => {
    return {
        type: ACTION_TYPES.OPERATOR,
        operator: OPERATORS.SUBTRACT
    };
};
export const divide = () => {
    return {
        type: ACTION_TYPES.OPERATOR,
        operator: OPERATORS.DIVIDE
    };
};
export const multiply = () => {
    return {
        type: ACTION_TYPES.OPERATOR,
        operator: OPERATORS.MULTIPLY
    };
};
export const equals = () => {
    return {
        type: ACTION_TYPES.EQUALS
    };
};
export const clear = () => {
    return {
        type: ACTION_TYPES.CLEAR
    };
};