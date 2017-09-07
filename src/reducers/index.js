'use strict';

import {
    NUMBER_INPUT,
    EQUALS,
    CLEAR,
    OPERATOR
} from '../constants/actionTypes';

const getInitialState = () => ({
    currentValue: '0',
    lastDigit: null,
    valueAtLastOperator: null,
    pendingOperator: null,
    clearOnNextDigit: false
});

//split into util module
const OPERATOR_FUNCS = {
    ADD: (a, b) => parseFloat(a) + parseFloat(b),
    SUBTRACT: (a, b) => parseFloat(a) - parseFloat(b),
    DIVIDE: (a, b) => parseFloat(a) / parseFloat(b),
    MULTIPLY: (a, b) => parseFloat(a) * parseFloat(b),
}

const setNewValue = (...rest) => Object.assign.apply(null, [{}, ...rest]);

/* eslint complexity: 0*/
export default function reducer(state = getInitialState(), action) {
    switch (action.type) {
        case OPERATOR:
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
        case NUMBER_INPUT:
            const currentValue = state.currentValue;


            if (action.value === 0 && currentValue === '0') {
                return state;
            }

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
        case EQUALS:
            if (!state.pendingOperator) {
                return state;
            }

            return setNewValue(state, getInitialState(), {
                currentValue: (OPERATOR_FUNCS[state.pendingOperator](state.valueAtLastOperator, state.currentValue)).toString(),
                clearOnNextDigit: true
            });
        case CLEAR:
            return setNewValue(state, getInitialState());
        default:
            return state;
    }
};
