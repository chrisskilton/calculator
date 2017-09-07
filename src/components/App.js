import React from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import OperatorPad from './OperatorPad';
import ExecutorPad from './ExecutorPad';
import styles from '../css/app.css';

const App = () => (
    <div className="app-wrapper">
        <Display />
        <NumberPad />
        <OperatorPad />
        <ExecutorPad />
    </div>
);

export default App;
