import React from 'react';

const Operator = ({label, type, onClick}) => (
    <div id={"padbutton-" + label} className="cellButton" onClick={onClick({type})}>
        <span>{type}</span>
    </div>
);

export default Operator;
