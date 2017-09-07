import React from 'react';
import Operator from './Operator';
import {
    add,
    subtract,
    divide,
    multiply
} from '../actions/operators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from '../css/operatorpad.css';

const OperatorPad = ({add, subtract, divide, multiply}) => (
    <div className="operatorPad">
        <Operator label="add" type="+" onClick={() => add} />
        <Operator label="subtract" type="-" onClick={() => subtract} />
        <Operator label="divide" type="%" onClick={() => divide} />
        <Operator label="multiply" type="*" onClick={() => multiply} />
    </div>
);

export default connect(null, dispatch => bindActionCreators({
    add,
    subtract,
    divide,
    multiply
}, dispatch))(OperatorPad);
