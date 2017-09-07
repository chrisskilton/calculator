import React from 'react';

const Input = ({label, numberValue, onClick}) => (
    <div id={"numpad-" + label} className="numberInput cellButton" onClick={onClick}>
        <span>{numberValue}</span>
    </div>
);

export default Input;
