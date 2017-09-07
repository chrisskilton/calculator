import * as ACTION_TYPES from '../constants/actionTypes';

export const numberInput = val => {
    return {
        type: ACTION_TYPES.NUMBER_INPUT,
        value: val
    };
};