import React from 'react';

import './Button.scss'

const Button = (props) => {
    return (
        <>
            <button className="btn" onClick={props.btnHandler}>{props.buttonText}</button>
        </>
    );
}

export default Button