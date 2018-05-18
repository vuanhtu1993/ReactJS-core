import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={() => props.incrementNumber(props.value)}>{props.value}</button>
        </div>
    );
};

export default Button;