'use strict';

import * as ACTION_TYPES from '../constants/actionTypes';
import {OPERATOR_FUNCS} from '../utils/operator';

const setNewValue = (...rest) => Object.assign.apply(null, [{}, ...rest]);

export const getInitialState = () => ({
    currentValue: '0',
    lastDigit: null,
    valueAtLastOperator: null,
    pendingOperator: null,
    clearOnNextDigit: false
});

/* eslint complexity: 0*/
export const reducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case ACTION_TYPES.NUMBER_INPUT:
            const currentValue = state.currentValue;

            if (currentValue.indexOf('.') > 0) {
                return state;
            }

            if (state.clearOnNextDigit) {
                return setNewValue(state, {
                    currentValue: action.value,
                    clearOnNextDigit: false
                });
            }

            let newValue;

            if (currentValue === '0') {
                newValue = action.value;
            } else {
                newValue = currentValue + action.value
            }

            return setNewValue(state, {
                currentValue: newValue
            });
        case ACTION_TYPES.OPERATOR:
            if (state.valueAtLastOperator === null) {
                return setNewValue(state, {
                    valueAtLastOperator: state.currentValue,
                    pendingOperator: action.operator,
                    clearOnNextDigit: true
                });
            }

            return setNewValue(state, {
                currentValue: (OPERATOR_FUNCS[action.operator](state.valueAtLastOperator, state.currentValue)).toString(),
                pendingOperator: null,
                clearOnNextDigit: true
            });
        case ACTION_TYPES.EQUALS:
            if (!state.pendingOperator) {
                return state;
            }

            return setNewValue(state, getInitialState(), {
                currentValue: (OPERATOR_FUNCS[state.pendingOperator](state.valueAtLastOperator, state.currentValue)).toString(),
                clearOnNextDigit: true
            });
        case ACTION_TYPES.CLEAR:
            return setNewValue(state, getInitialState());
        default:
            return state;
    }
};
