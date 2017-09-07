import React from 'react';
import Input from './Input';
import {numberInput} from '../actions/numberInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const NumberPad = ({onClick}) => (
    <div className="numPad">
        <Input key="1" label="1" numberValue="1" onClick={() => onClick('1')} />
        <Input key="2" label="2" numberValue="2" onClick={() => onClick('2')} />
        <Input key="3" label="3" numberValue="3" onClick={() => onClick('3')} />
        <Input key="4" label="4" numberValue="4" onClick={() => onClick('4')} />
        <Input key="5" label="5" numberValue="5" onClick={() => onClick('5')} />
        <Input key="6" label="6" numberValue="6" onClick={() => onClick('6')} />
        <Input key="7" label="7" numberValue="7" onClick={() => onClick('7')} />
        <Input key="8" label="8" numberValue="8" onClick={() => onClick('8')} />
        <Input key="9" label="9" numberValue="9" onClick={() => onClick('9')} />
        <Input key="0" label="0" numberValue="0" onClick={() => onClick('0')} />
        <Input key="decimal" label="decimal" numberValue="." onClick={() => onClick('.')} />
    </div>
);

export default connect(null, dispatch => bindActionCreators({
    onClick: numberInput
}, dispatch))(NumberPad);
