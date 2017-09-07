import React from 'react';
import Operator from './Operator';
import {
    equals,
    clear
} from '../actions/operators';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from '../css/executorpad.css';

const ExecutorPad = ({equals, clear}) => (
    <div className="executorPad">
        <Operator label="equals" key="equals" type="=" onClick={() => equals} />
        <Operator label="clear" key="clear" type="C" onClick={() => clear} />
    </div>
);

export default connect(null, dispatch => bindActionCreators({
    equals,
    clear
}, dispatch))(ExecutorPad);
