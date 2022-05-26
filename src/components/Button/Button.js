import React from 'react';

import './Button.scss'

const Button = ({btnHandler, buttonText}) => {
    return (
        <>
            <button className="btn" onClick={btnHandler}>{buttonText}</button>
        </>
    );
}

export default Button