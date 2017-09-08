'use strict';

const reducer = require('../../../src/reducers');
const actions = require('../../../src/constants/actionTypes');

describe('reducer', () => {
    let state;
    let action;

    beforeEach(() => {
        state = reducer.getInitialState();
        action = {
            type: ''
        };
    });

    afterEach(() => {
        state = undefined;
    });

    describe('number input', () => {
        beforeEach(() => {
            state = reducer.getInitialState();
            action.type = actions.NUMBER_INPUT;
        });

        describe('decimal places', () => {
            describe('value does not contain decimal place', () => {
                it('should alter value', () => {
                    state.currentValue = '123';
                    action.value = '.';
                    expect(reducer.reducer(state, action).currentValue).toEqual('123.');
                });
            });

            describe('value contains decimal place', () => {
                it('should not alter value', () => {
                    state.currentValue = '123.456';
                    action.value = '.';
                    expect(reducer.reducer(state, action).currentValue).toEqual('123.456');
                });
            });
        });
    });
});
