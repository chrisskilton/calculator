import React from 'react';
import {connect} from 'react-redux';

const Display = ({currentValue}) => (
    <div className="display">
        <span>{currentValue}</span>
    </div>
);

export default connect(
    state => ({currentValue: state.currentValue})
)(Display);
