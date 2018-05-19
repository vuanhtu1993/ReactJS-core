import React from 'react';

const Clock = (props) => {
    return (
        <div>
            <p> Days:{Math.floor(props.distance / (1000 * 60 * 60 * 24))}</p>
            <p>Hours:{Math.floor((props.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}</p>
            <p>Minute: {Math.floor((props.distance % (1000 * 60 * 60)) / (1000 * 60))}</p>
            <p>Second: {Math.floor((props.distance % (1000 * 60)) / 1000)}</p>
        </div>
    );
};

export default Clock;